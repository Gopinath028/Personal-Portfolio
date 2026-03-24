import nodemailer from "nodemailer";

export const sendContactEmail = async (contact) => {
  console.log("Inside mailer:");
  console.log("SMTP_HOST:", process.env.SMTP_HOST);
  console.log("SMTP_PORT:", process.env.SMTP_PORT);
  console.log("HOST:", process.env.SMTP_HOST);
console.log("USER:", process.env.SMTP_USER);

  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true, // ✅ MUST be true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

  console.log("PORT:", process.env.SMTP_PORT);

  await transporter.verify();

  const html = `
    <h3>New contact message</h3>
    <p><strong>Name:</strong> ${contact.name}</p>
    <p><strong>Email:</strong> ${contact.email}</p>
    <p><strong>Message:</strong><br/>${(contact.message || "").replace(
      /\n/g,
      "<br/>"
    )}</p>
  `;


  
  return transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_TO || process.env.SMTP_USER,
    subject: `New contact: ${contact.subject || "No subject"}`,
    text: contact.message,
    html,
  });
};

