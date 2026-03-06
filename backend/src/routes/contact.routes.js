import express from "express";
import { createContact } from "../controllers/contact.controller.js";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contacts
router.post("/", createContact);

// GET /api/contacts
router.get("/", async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, data: contacts });
  } catch (err) {
    next(err);
  }
});

export default router;

