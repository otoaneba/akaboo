
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
    subject: "Welcome to Akaboo - You're on the List!",
    html: `<h1 style="text-align: center">Hey ${data.name}, 
    Welcome to Akaboo!</h1>
    <div style="text-align: center; font-size: 1.25rem; ">
    <p>Thank you for joining the Akaboo waitlist!
    We’re thrilled to have 
    you with us on this exciting journey towards sustainable and responsible 
    parenting. You’re now part of a community that values quality, 
    affordability, and environmental consciousness in caring for our 
    little ones..</p>
    <br>
    <p style="font-weight: bold;>What’s Next?</p>
    <p >You’ll be among the first to know when we launch our platform. 
    We’ll keep you updated with exclusive sneak peeks, early bird specials, 
    and more. Plus, we’ll reach out to get your insights and preferences, 
    which will help us tailor Akaboo to better suit your needs.</p>
    <br>
    <p style="font-weight: bold;>Get Involved</p>
    <p>You’ll be among the first to know when we launch our platform. 
    We’ll keep you updated with exclusive sneak peeks, early bird specials, 
    and more. Plus, we’ll reach out to get your insights and preferences, 
    which will help us tailor Akaboo to better suit your needs.</p>
    <br>
    <p style="font-weight: bold;>Spread the Word</p>
    <p>Think a friend or a family member might be interested in Akaboo? 
    Help us grow our community by sharing our sign-up link. The more, 
    the merrier!</p> 
    <br>
    <p>Thank you once again for your support and enthusiasm. We can’t 
    wait to bring you along as we redefine the way parents buy and sell 
    baby gear. If you have any questions or just want to say hello, feel free 
    to reply to this email. We love hearing from you!</p>
    <br>
    </div>
    
    <p>Warm regards,</p>
    <p>Naoto and Cynthia</p>
    <p>Founders, Akaboo Team</p>`,
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
