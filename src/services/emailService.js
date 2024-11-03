const createTransporter = require("../config/mailer");

const sendTweetMail = async (bot) => {
  const transporter = createTransporter();
  const mailOptions = {
    from: "ChuTek X Bot <noreply@chutek.com>",
    to: "pd3072894@gmail.com",
    subject: `${bot} Just Tweeted on Your Behalf!`,
    text: `Hello David Patrick,\n\nYour bot "${bot}" has just tweeted a new post on your Twitter account. Check it out to see how it looks!\n\nBest regards,\nChuTek X Bot`,
    html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
            <h2 style="color: #1DA1F2; text-align: center;">🐦 New Tweet Alert!</h2>
            <p style="font-size: 16px; color: #333;">
                Hello David Patrick,
            </p>
            <p style="font-size: 16px; color: #555;">
                Your bot "<strong style="color: #1DA1F2;">${bot}</strong>" has just posted a new tweet on your Twitter account. Be sure to check it out and engage with your followers!
            </p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="https://x.com/davepatty5686" style="display: inline-block; background-color: #1DA1F2; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
                    View Your Tweet
                </a>
            </div>
            <p style="font-size: 14px; color: #777;">
                Best regards,<br>
                <strong style="color: #1DA1F2;">ChuTek X Bot</strong>
            </p>
        </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
const sendLikeMail = async (bot) => {
  const transporter = createTransporter();
  const mailOptions = {
    from: "ChuTek X Bot <noreply@chutek.com>",
    to: "pd3072894@gmail.com",
    subject: `${bot}, Liked a Trending Post on Twitter!`,
    text: `Hello David Patrick,\n\nYour bot "${bot}" has liked a post featuring a trending hashtag on Twitter. Stay connected with what's trending!\n\nBest regards,\nChuTek X Bot`,
    html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
            <h2 style="color: #1DA1F2; text-align: center;">💙 Trending Post Liked!</h2>
            <p style="font-size: 16px; color: #333;">
                Hello David Patrick,
            </p>
            <p style="font-size: 16px; color: #555;">
                Your bot "<strong style="color: #1DA1F2;">${bot}</strong>" has just liked a post featuring a trending hashtag on Twitter.
            </p>
            <p style="font-size: 16px; color: #555;">
                Keep your profile engaged with trending content and stay in the loop!
            </p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="https://x.com/davepatty5686" style="display: inline-block; background-color: #1DA1F2; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
                    View Liked Post
                </a>
            </div>
            <p style="font-size: 14px; color: #777;">
                Best regards,<br>
                <strong style="color: #1DA1F2;">ChuTek X Bot</strong>
            </p>
        </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
const sendReTweetMail = async (bot) => {
  const transporter = createTransporter();
  const mailOptions = {
    from: "ChuTek X Bot <noreply@chutek.com>",
    to: "pd3072894@gmail.com",
    subject: `${bot}, Retweeted a Trending Hashtag!`,
    text: `Hello David Patrick,\n\nYour bot "${bot}" has just retweeted a trending hashtag on Twitter. Check out the retweet on your profile!\n\nBest regards,\nChuTek X Bot`,
    html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
            <h2 style="color: #1DA1F2; text-align: center;">🚀 Trending Hashtag Retweeted!</h2>
            <p style="font-size: 16px; color: #333;">
                Hello David Patrick,
            </p>
            <p style="font-size: 16px; color: #555;">
                Exciting news! Your bot "<strong style="color: #1DA1F2;">${bot}</strong>" has just retweeted a post featuring a trending hashtag.
            </p>
            <p style="font-size: 16px; color: #555;">
                Stay engaged with the latest trends and keep your profile active!
            </p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="https://x.com/davepatty5686" style="display: inline-block; background-color: #1DA1F2; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
                    View Your Retweet
                </a>
            </div>
            <p style="font-size: 14px; color: #777;">
                Best regards,<br>
                <strong style="color: #1DA1F2;">ChuTek X Bot</strong>
            </p>
        </div>
    `,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
const sendNotificationMail = async (bot, social) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: "ChuTek X Bot <noreply@chutek.com>",
    to: "pd3072894@gmail.com",
    subject: `${bot}, New Post on ${social}`,
    text: `Hello David Patrick,\n\nYour bot "${bot}" just posted on "${social}".\n\nBest regards,\nChuTek X Bot`,
    html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 5px; border: 1px solid #e0e0e0;">
            <h2 style="color: #333;">Hello David Patrick,</h2>
            <p style="font-size: 16px; color: #555;">
                Your bot "<strong style="color: #4CAF50;">${bot}</strong>" just posted on "<strong style="color: #2196F3;">${social}</strong>".
            </p>
            <p style="font-size: 14px; color: #777;">
                Best regards,<br>
                <strong style="color: #4CAF50;">ChuTek X Bot</strong>
            </p>
        </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = {
  sendNotificationMail,
  sendReTweetMail,
  sendTweetMail,
  sendLikeMail,
};
