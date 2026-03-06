import nodemailer from "nodemailer";

export const sendContactEmail = async (contact) => {
  try {
    console.log("📨 Preparing to send contact email...");

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // must be false for port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email HTML template
    const html = `
      <h2>📩 New Contact Message</h2>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      ${contact.phone ? `<p><strong>Phone:</strong> ${contact.phone}</p>` : ""}
      <p><strong>Subject:</strong> ${contact.subject || "No Subject"}</p>
      <p><strong>Message:</strong></p>
      <p>${(contact.message || "").replace(/\n/g, "<br/>")}</p>
      <br/>
      <small>Contact ID: ${contact._id}</small>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_TO || process.env.SMTP_USER,
      subject: `📩 New Contact: ${contact.subject || "Portfolio Message"}`,
      text: contact.message,
      html,
    });

    console.log("✅ Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("❌ Mail sending failed:", error);
    throw error;
  }
};
