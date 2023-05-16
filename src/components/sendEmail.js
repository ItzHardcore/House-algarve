const nodemailer = require("nodemailer");

// Create a transporter object with your email service provider details
const transporter = nodemailer.createTransport({
  service: "YOUR_EMAIL_SERVICE_PROVIDER", // e.g., Gmail, Outlook, etc.
  auth: {
    user: "YOUR_EMAIL_ADDRESS",
    pass: "YOUR_EMAIL_PASSWORD",
  },
});

const sendEmail = async (name, email, message) => {
  try {
    // Compose the email message
    const mailOptions = {
      from: "",
      to: "bruno.vp.1999@gmail.com",
      subject: "Contacto do website",
      html: `
        <h3>Contacto do website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
