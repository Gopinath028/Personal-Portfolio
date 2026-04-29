import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 2525, // better on some free hosts
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

export const sendContactEmail = async ({
  name,
  email,
  phone,
  subject,
  message,
  _id,
}) => {
  try {
    await transporter.verify();
    console.log("SMTP connected");

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to:"gopinathk028@gmail.com",
      replyTo: email,
      subject: subject || "Portfolio Contact",
      html: `
        <h2>New Message</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone || ""}</p>
        <p>ID: ${_id}</p>
        <p>Message: ${message}</p>
      `,
    });

    console.log("Mail sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("MAIL ERROR:", error);
    throw error;
  }
};
