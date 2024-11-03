const { ETwitterStreamEvent } = require("twitter-api-v2");
const { twitterClient, twitterBearer } = require("../config/twitterClient");
const { sendReTweetMail, sendTweetMail, sendLikeMail } = require("../services/emailService");
const { download } = require("../utils/utilities");

const tweet = async (content) => {
  try {
    await twitterClient.v2.tweet(content);
  } catch (e) {
    console.log("error, occur while sending tweet", e);
  }
};

const tweetImageText = async (caption) => {
  const uri = "https://th.bing.com/th/id/OIF.9OdV8r7GVtBRNdzMLHyuJQ?w=1312&h=736&rs=1&pid=ImgDetMain";
  const filename = "image.png";

  download(uri, filename, async function(){
      try {
          const mediaId = await twitterClient.v1.uploadMedia("./image.png");
          await twitterClient.v2.tweet({
              text: caption,
              media: {
                  media_ids: [mediaId]
              }
          });
          await sendTweetMail("Chukky");
      } catch (e) {
          console.log(e)
      }
  });
};

const likeTweets = async (searchParams) => {
  const Tweets = await twitterBearer.v2.search(searchParams);

  for await (const tweet of Tweets) {
    await twitterClient.v2.like(process.env.APP_ID, tweet.id);
  }
  await sendLikeMail("Chukky")
};
const UnlikeTweets = async (searchParams) => {
  const Tweets = await twitterBearer.v2.search(searchParams);
  for await (const tweet of Tweets) {
    await twitterClient.v2.unlike(process.env.APP_ID, tweet.id);
  }
};

const reTweet = async (searchParams) => {
  const Tweets = await twitterBearer.v2.search(searchParams);
  const tweetID = Tweets.data.data[0].id;
  await twitterClient.v2.retweet(process.env.APP_ID, tweetID);
  await sendReTweetMail("Chukky")
  
};


const setupStreamRules = async (newRules) => {
  // Get and delete old rules if needed
  const rules = await twitterBearer.v2.streamRules();
  if (rules.data?.length) {
    await twitterBearer.v2.updateStreamRules({
      delete: { ids: rules.data.map(rule => rule.id) },
    });
  }

  // Add new rules from parameters
  await twitterBearer.v2.updateStreamRules({
    add: newRules.map(rule => ({ value: rule })),
  });
};

// Start the Twitter stream with customizable rules and reply
const startTweetStream = async (newRules) => {
  try {
    await setupStreamRules(newRules); // Set up rules before starting the stream

    const stream = await twitterClient.v2.searchStream({
      'tweet.fields': ['referenced_tweets', 'author_id', 'text'], // Include 'text' field
      expansions: ['referenced_tweets.id'],
    });

    stream.autoReconnect = true;

    stream.on(ETwitterStreamEvent.Data, async tweet => {
      const isARt = tweet.data.referenced_tweets?.some(t => t.type === 'retweeted') ?? false;
      if (isARt || tweet.data.author_id === process.env.TWITTER_USER_ID) {
        return; // Skip retweets and self-tweets
      }

      const tweetText = tweet.data.text;
      console.log(`Received tweet: ${tweetText}`);

      const replyMessage = `Thanks for your tweet about "${tweetText}"!`;

      try {
        await twitterClient.v1.reply(replyMessage, tweet.data.id);
        console.log(`Replied to tweet ID: ${tweet.data.id}`);
      } catch (replyError) {
        console.error("Failed to reply:", replyError);
      }
    });

    stream.on(ETwitterStreamEvent.Error, (error) => {
      console.error("Stream error:", error);
    });

    stream.connect(); // Start the stream
  } catch (error) {
    console.error("Error starting the tweet stream:", error);
  }
};


module.exports = {
  tweet,
  likeTweets,
  reTweet,
  startTweetStream,
  UnlikeTweets,
  tweetImageText,
};
