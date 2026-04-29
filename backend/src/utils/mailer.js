import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendContactEmail = async (data) => {
  try {
    console.log("SMTP_USER:", process.env.SMTP_USER);

    await transporter.verify();
    console.log("SMTP Connected");

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "Test Contact",
      html: "<h2>Email Working</h2>",
    });

    console.log("Mail Sent:", info.messageId);
  } catch (error) {
    console.error("MAIL ERROR:", error);
  }
};
