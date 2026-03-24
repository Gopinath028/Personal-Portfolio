import express from "express";
import { createContact } from "../controllers/contact.controller.js";
import Contact from "../models/Contact.js";

const router = express.Router();

// Public contact submission
router.post("/contacts", createContact);

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
