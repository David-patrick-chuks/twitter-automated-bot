const { HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
const SECRETS = require("../keys/SECRETS");

const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const generationConfig = {
    maxOutputTokens: 70,
    candidateCount: 1,
    temperature: 1.0,
  };
  
  const model = SECRETS.GEMINI_MODEL

  module.exports = { safetySettings, model , generationConfig};

