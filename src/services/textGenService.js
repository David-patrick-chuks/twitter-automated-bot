const GenAI = require("@google/generative-ai");
const SECRETS = require("../keys/SECRETS");
const { generationConfig, safetySettings, model } = require("../config/gemini");
require("dotenv").config();

const apiKey = SECRETS.GEMINI_API_KEY;

if (!apiKey) {
  console.error("API key is not set. Please check your .env file.");
  process.exit(1); // Exit if no API key is found
}

const genAI = new GenAI.GoogleGenerativeAI( "AIzaSyBDvTIucsN312ENDDvpEJVqufmi13eCYmk" || apiKey);

async function generateTextContent(prompt) {
  // Validate input prompt to ensure it's a valid string
  if (typeof prompt !== "string" || prompt.trim() === "") {
    console.error("Invalid prompt: Please provide a valid string.");
    return; // Exit early if prompt is not valid
  }

  const generativeModel = genAI.getGenerativeModel({
    model: model,
    generationConfig: generationConfig,
    safetySettings: safetySettings,
  });

  // Combine the system prompt with the user prompt
  const fullPrompt = `${prompt}`.trim(); // Trim to clean up extra spaces

  try {
    // Generate content using the full prompt
    const result = await generativeModel.generateContent(fullPrompt);
    const response = await result.response;

    // Ensure the text extraction method is correct
    if (response && response.text) {
      const text = response.text();
      const formattedResponse = text.replace(/\*\s+/g, "").replace(/\n/g, " ").trim(); // Clean up formatting

      console.log(formattedResponse); // Log the formatted paragraph
      return formattedResponse; 
    } else {
      console.error("Unexpected response format:", response);
    }
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

// // Example usage
// const promptOptions = [
//   "A network of interconnected nodes, glowing with data streams, powered by the Node.js logo.",
//   "Code snippets of JavaScript and Node.js frameworks (Express, NestJS) floating in a server room, with cables and blinking lights.",
//   "An abstract representation of data flowing through the cloud, showcasing Node.js capabilities."
// ];

// // You can choose one of the options as your prompt
// const userPrompt = promptOptions[0]; // Select the first option as an example

// generateTextContent(userPrompt);

module.exports = generateTextContent;
