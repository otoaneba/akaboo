
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
    return mailTransport.sendMail(mailOptions).then(() => {
      return console.log("Welcome email sent to:", recipientEmail);
    }).catch((error) => {
      console.error("There was an error while sending the email:", error);
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
    subject: "Welcome to Akaboo!",
    html: `<h1>Hey ${data.name}, Welcome to Akaboo!</h1>
    <p>Your access is confirmed. We're excited to have you on board and
    look forward to offering you the best pre-owned baby gear.</p>
    <p>Here are some things you can look forward to:</p>
    <ul>
      <li>Exclusive early access to our products.</li>
      <li>Special promotions and discounts.</li>
      <li>Updates on the latest trends in baby gear.</li>
    </ul>
    <p>Thank you for joining us at Akaboo!</p>
    <p>Best Regards,<br>Akaboo Team</p>`,
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
