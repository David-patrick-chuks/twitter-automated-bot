const SECRETS = require("../keys/SECRETS");
const { getHfUrl, getTargetSize } = require("../utils/get");
const generateRandomNumber = require("../utils/randomNum");
const cloudinary = require("../config/cloudinary");
const { Readable } = require("stream");

const URL = `${SECRETS.HF_API_URL_B}`;
const imageSize = getTargetSize();

async function GenerateTweetImage(prompt) {
  const payload = {
    inputs: prompt,
    parameters: {
      num_inference_steps: 50,
      guidance_scale: 7.5,
      num_images_per_prompt: 1,
    },
  };
  const response = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${SECRETS.HF_API_Key}`, // Replace with your Hugging Face API key
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  // Check if the response is OK
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to generate image: ${errorText}`);
  }

  // Convert the response body to a Buffer
  const arrayBuffer = await response.arrayBuffer();
  const b= Buffer.from(arrayBuffer)
 
  const randomValue = generateRandomNumber(5);
  const publicId = `${SECRETS.USER_NAME}_POSTIMAGE_${randomValue}`;

  // Upload the buffer directly to Cloudinary
  try {
    const uploadResponse = await cloudinary.uploader.upload_stream({
      resource_type: "image",
      public_id: publicId,
    }).end(b);

    console.log(`Image uploaded to Cloudinary: ${uploadResponse.secure_url}`);
    return Buffer.from(arrayBuffer);
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error; // Handle the error appropriately
  }
}

module.exports = GenerateTweetImage;
