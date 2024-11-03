const { IgApi, getIgImageId } = require("../config/instaClient");
const {sendNotificationMail} = require("../services/emailService");
require("dotenv").config();
const postToInsta = async (caption) => {
  try {
    const ig = new IgApi();
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);

    const imageBuffer = await getIgImageId({
      url: "https://www.cioinsight.com/wp-content/uploads/2022/08/Chatbots-in-Machine-Learning-scaled.jpeg",
      encoding: null,
    });

    await ig.publish.photo({
      file: imageBuffer,
      caption: caption,
    });
    await sendNotificationMail("chukky", "Instagram");
    console.log("Post published successfully!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = postToInsta;
