const postToInsta = require("../bot/instagramPostBot");
const GenerateTweetImage = require("../services/imageGenService");
const generateTextContent = require("../services/textGenService");
const system =
  "You are an AI that generates prompts for an image generation AI";
const prompt =
  "I need an image prompt that captures the essence of backend development node js";
const system2 = "You are an ";
const imageCapption = "Testing my insta bot: hello world";

const img = "https://www.cioinsight.com/wp-content/uploads/2022/08/Chatbots-in-Machine-Learning-scaled.jpeg"
async function instaBot() {
  try {
    // const imagePrompt = await generateTextContent(prompt);
    // const buffer = await GenerateTweetImage(prompt);
    // const imageCapption = await generateTextContent(system2, imagePrompt);
    postToInsta(imageCapption,img );
  } catch (error) {
    console.log("error while posting", error);
  }
}

module.exports = instaBot;
