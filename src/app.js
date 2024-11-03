const CronJob = require("cron").CronJob;
const express = require("express");
const generateTextContent = require("./services/textGenService");
const {
  startTweetStream,
  reTweet,
  tweet,
  tweetImageText,
  likeTweets,
  UnlikeTweets,
} = require("./bot/tweetContentBot");
const postToInsta = require("./bot/instagramPostBot");

const app = express();
require("dotenv").config();

const tweetContent =
  "JavaScript is the most widely-used and versatile language, powering the web, mobile apps, and server-side applications. Its community and ecosystem make it the top choice for developers worldwide. #JavaScript #WebDevelopment";
const tweetImageContent =
  "Chatbots are revolutionizing customer service with their ability to understand and respond to user queries. #Chatbots #CustomerService";

const cronTweet = new CronJob("30 * * * * *", async () => {
  try {
    console.log("====>> Starting Cron Job <<<====");
    // Example for starting the tweet stream based on rules (currently commented out)
    // const newRules = ["JavaScript", "NodeJS", "Web Development"];
    // startTweetStream(newRules);

    // Generate a tweet about JavaScript and post it
    // const tweetContent = await generateTextContent(
    //   "Write a tweet about JavaScript"
    // );
    // await tweet(tweetContent); // Posts the generated tweet to Twitter

    // Generate a caption for an image related to chatbots and post it with an image
    // const tweetImageContent = await generateTextContent(
    //   "Generate a short caption for a chatbot image"
    // );
    // await tweetImageText(tweetImageContent); // Posts the image with a caption

    // Like tweets that contain the hashtag "#ReactJs"
    // await likeTweets("#ReactJs");

    // Post the generated image caption to Instagram
    await postToInsta(tweetImageContent);

    // Unlike tweets that contain the hashtag "#ReactJs"
    // await UnlikeTweets("#ReactJs");

    // Retweet posts that match the hashtag "#JavaScript"
    // await reTweet("#JavaScript");

    console.log("Cron job executed successfully");
    console.log("All Bot has successfully performed their tasks");
  } catch (error) {
    console.log("Error: while executing the crons functions", error);
  }
});

// Start the cron job to execute the tweet generation and posting tasks to Twitter every 30 seconds
cronTweet.start();

module.exports = app;
