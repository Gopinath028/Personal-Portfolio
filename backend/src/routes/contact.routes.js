import express from "express";
import { createContact } from "../controllers/contact.Controller.js";

const router = express.Router();

router.post("/", createContact);

export default router;

