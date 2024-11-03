require('dotenv').config();
const BEARER_TOKEN = process.env.BEARER_TOKEN;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACCESS_SECRET = process.env.ACCESS_SECRET;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const HF_API_URL_A = process.env.HF_API_URL_A;
const HF_API_URL_B = process.env.HF_API_URL_B;
const HF_API_Key = process.env.HF_API_KEY;
const APP_ID = process.env.APP_ID;
const PORT = process.env.PORT;
const GEMINI_MODEL = process.env.GEMINI_MODEL;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_SECURE = process.env.SMTP_SECURE;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_SERVICE = process.env.SMTP_SERVICE;
const SMTP_HOST = process.env.SMTP_HOST;
const USER_NAME = process.env.USER_NAME
const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;
const IG_USERNAME=process.env.IG_USERNAME
const IG_PASSWORD=process.env.IG_PASSWORD

const SECRETS = {
  USER_NAME,
  API_KEY,
  OPEN_AI_API_KEY,
  API_SECRET,
  ACCESS_TOKEN,
  ACCESS_SECRET,
  GEMINI_API_KEY,
  HF_API_URL_A,
  HF_API_URL_B,
  HF_API_Key,
  APP_ID,
  BEARER_TOKEN,
  PORT,
  GEMINI_MODEL,
  SMTP_HOST,
  SMTP_SERVICE,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
  SMTP_PASSWORD,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PORT,
};

module.exports = SECRETS;
