const SECRETS = require("../keys/SECRETS");

function getKeyword() {
  // select random keywords
  const keywords = [
    "reactjs",
    "javascript",
    "front-end developer",
    "javascript developer",
    "html",
    "css",
    "developer job",
    "tips for javascript developer",
    "website",
    "web design",
    "developer job",
    "MAANG companies",
    "coding",
    "reading book",
    "programmer work culture",
  ];

  const index = Math.floor(Math.random() * keywords.length);
  return keywords[index];
}

function getHfUrl() {
  // select random keywords
  const urls = [SECRETS.HF_API_URL_A, SECRETS.HF_API_URL_B];

  const id = Math.floor(Math.random() * urls.length);
  return urls[id];
}

function getTargetSize() {
  // select random keywords
  const size = [
    { width: 375, height: 375 }, // Mobile view
    { width: 500, height: 300 },
    { width: 756, height: 300 },
  ];

  const id = Math.floor(Math.random() * size.length);
  return size[id];
}

module.exports = { getHfUrl, getKeyword, getTargetSize };
