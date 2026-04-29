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

export const sendContactEmail = async ({
  name,
  email,
  phone,
  subject,
  message,
  _id,
}) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER, // where you receive messages
    replyTo: email,
    subject: `New Portfolio Contact - ${subject || "No Subject"}`,
    html: `
      <h2>New Contact Message</h2>
      <p><b>ID:</b> ${_id}</p>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "Not Provided"}</p>
      <p><b>Subject:</b> ${subject || "No Subject"}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
  });
};
