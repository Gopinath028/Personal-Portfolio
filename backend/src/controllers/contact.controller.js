import Contact from "../models/Contact.js";
import { sendContactEmail } from "../utils/mailer.js";

export const createContact = async (req, res, next) => {
  try {
    const { fullName, name, email, phone, subject, message } = req.body;

    const contactName = fullName || name;

    // validation
    if (!contactName || !email || !message) {
      const err = new Error("Name, email and message are required");
      err.statusCode = 400;
      throw err;
    }

    // Save to DB
    const newContact = new Contact({
      fullName: contactName,
      email,
      phone,
      subject,
      message,
    });

    await newContact.save();

    // Send Email
    try {
      await sendContactEmail({
        name: contactName,
        email,
        phone,
        subject,
        message,
        _id: newContact._id,
      });
    } catch (mailError) {
      console.warn("⚠️ Failed to send contact email:", mailError);
    }

    res.status(201).json({
      success: true,
      message: "Message stored successfully",
    });

  } catch (error) {
    console.error("❌ Error in createContact:", error);
    next(error);
  }
};
