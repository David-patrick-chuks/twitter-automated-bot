const { TwitterApi } = require("twitter-api-v2");
const SECRETS = require("../keys/SECRETS");

const client = new TwitterApi(
  {
    appKey: "6xYpmC9vGYbtCkz3Rrgq4sOXe",
    appSecret: "Ikk1vFOUJMDK2zlJ5GVV9lslOkMM5g7DLm7dOjcNs2Pxo1wm8u",
    accessToken: "1696677695566807040-bdlTJAgfMMEJYDvNElR8mYxVJwEEMD",
    accessSecret: "WwRgsm3SxtDkq98WOX8D5cdwbygFEXh7xItslM6rMKzCU",
  },
 
);

const bearer = new TwitterApi("AAAAAAAAAAAAAAAAAAAAAEkCwwEAAAAATgFzGmXtBSQvJsnwUBaSOlX2i5Q%3DZf5AKgLcXvH4dY5qf8FwXK7B96lvSpLjoTIYuTk1FIDsa9gwZf");

const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

module.exports = { twitterClient, twitterBearer };
