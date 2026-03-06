import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (contact) => {
  try {
    console.log("📨 Sending contact email...");

    const adminHtml = `
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

    // Email to you (admin notification)
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.NOTIFY_TO || "gopinathk028@gmail.com",
      subject: `📩 New Contact: ${contact.subject || "Portfolio Message"}`,
      html: adminHtml,
    });

    console.log("✅ Admin email sent");

    // Auto reply to user
    const userHtml = `
      <h2>Thanks for contacting me 👋</h2>
      <p>Hi ${contact.name},</p>
      <p>I received your message and will get back to you soon.</p>
      <br/>
      <p><strong>Your Message:</strong></p>
      <p>${contact.message}</p>
      <br/>
      <p>Best regards,<br/>Portfolio Owner</p>
    `;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: contact.email,
      subject: "Thanks for contacting me",
      html: userHtml,
    });

    console.log("✅ User auto-reply sent");

  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};
