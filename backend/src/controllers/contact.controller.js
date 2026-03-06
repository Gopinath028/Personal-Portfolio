import Contact from "../models/Contact.js";
import { sendContactEmail } from "../utils/mailer.js";

export const createContact = async (req, res, next) => {
  try {
    const { fullName, name, email, phone, subject, message } = req.body;

    const contactName = fullName || name;

    if (!contactName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    // Save to MongoDB
    const newContact = new Contact({
      fullName: contactName,
      email,
      phone,
      subject,
      message,
    });

    await newContact.save();

    // Send email (non-blocking)
    sendContactEmail({
      name: contactName,
      email,
      phone,
      subject,
      message,
      _id: newContact._id,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("❌ Error in createContact:", error);
    next(error);
  }
};
