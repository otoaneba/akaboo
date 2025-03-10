const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
// const cors = require("cors")({origin: true});

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
console.log("log the credentials: ** \n ", gmailEmail, gmailPassword);

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  console.log("user from index.js", user);
  if (user.emailVerified) {
    const recipientEmail = user.email; // The email of the new user.
    const mailOptions = {
      from: "'Your Baby Gear Marketplace' <no-reply@yourdomain.com>",
      to: recipientEmail,
      subject: "Welcome to Our Service!",
      text: `Welcome ${user.displayName || ""}!
       Thank you for signing up for our service.`,
    };
    return mailTransport
        .sendMail(mailOptions)
        .then(() => {
          return console.log("Welcome email sent to:", recipientEmail);
        })
        .catch((error) => {
          console.error(
              "There was an error while sending the email:",
              error,
          );
          console.log("credentials: ", mailTransport.auth);
        });
  } else {
    return null;
  }
});

exports.sendEmail = functions.https.onCall(async (data, context) => {
  const mailOptions = {
    from: `Akaboo Team <spiceitglobal@gmail.com>`,
    to: data.email,
    subject: "Welcome to Akaboo - You're on the List!",
    html: `
      <h1 style="text-align: center;">Welcome to Akaboo!</h1>
      <div style="text-align: center; font-size: 1.25rem;">
        <p>Thank you for joining the Akaboo waitlist!</p>
        <p>We're excited to have you with us.</p>
        <p>If you have any questions, feel free to reply to this email.</p>
        <p>Warm regards,<br>Naoto and Cynthia<br>Founders, Akaboo Team</p>
      </div>
    `,
  };

  try {
    await mailTransport.sendMail(mailOptions);
    console.log("Email sent successfully");
    return {success: true};
  } catch (error) {
    console.error("There was an error while sending the email:", error);
    return {success: false};
  }
});
