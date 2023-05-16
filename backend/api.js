const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const stubTransport = require("nodemailer-stub-transport");

const transporter = nodemailer.createTransport(stubTransport());

router.post("/send-email", (req, res) => {
  // Extract form data from the request body
  const { name, email, message } = req.body;

  // Create a SMTP transporter using your domain's SMTP settings
  //   const transporter = nodemailer.createTransport({
  //     host: "your-smtp-server",
  //     port: 587, // Replace with the appropriate port number
  //     secure: false, // Set to true if your SMTP server requires a secure connection (e.g., TLS)
  //     auth: {
  //       user: "your-username",
  //       pass: "your-password",
  //     },
  //   });

  // Define the email message
  const mailOptions = {
    from: "noreply@example.com", // Replace with your "noreply" address
    to: "recipient@example.com",
    subject: "Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.error("Error sending email:", error);
  //       res
  //         .status(500)
  //         .json({ error: "An error occurred while sending the email" });
  //     } else {
  //       console.log("Email sent:", info.response);
  //       res.status(200).json({ message: "Email sent successfully" });
  //     }
  //   });
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
});

module.exports = router;
