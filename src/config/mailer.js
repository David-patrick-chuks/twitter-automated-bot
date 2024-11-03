const SECRETS = require("../keys/SECRETS");
const nodemailer= require("nodemailer")

const createTransporter = () => {
    return nodemailer.createTransport({
      host: SECRETS.SMTP_HOST || 'smtp.example.com',
      port: Number(SECRETS.SMTP_PORT) || 587,
      secure: SECRETS.SMTP_SECURE === 'true', 
      service: SECRETS.SMTP_SERVICE,
      auth: {
        user: SECRETS.SMTP_USER,
        pass: SECRETS.SMTP_PASSWORD,
      },
    });
  };
  
  module.exports= createTransporter