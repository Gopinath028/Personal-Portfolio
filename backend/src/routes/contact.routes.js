import express from "express";
import { createContact } from "../controllers/contact.controller.js";
import Contact from "../models/Contact.js";
import { sendContactEmail } from "../utils/mailer.js";

const router = express.Router();

// Public contact submission
router.post("/contacts", createContact);

router.get("/test-mail", async (req, res) => {
  try {
    await sendContactEmail({
      name: "Test User",
      email: "test@test.com",
      message: "This is a test email",
      subject: "Test",
      _id: "123",
    });

    res.send("Email test successful");
  } catch (err) {
    console.error(err);
    res.status(500).send("Email failed");
  }
});
// Optional: simple listing endpoint (protect in real apps)
router.get("/contacts", async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, data: contacts });
  } catch (err) {
    next(err);
  }
});

export default router;

