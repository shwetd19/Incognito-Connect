// post.route.js
import express from "express";
import bodyParser from "body-parser";
import { createPost, getPosts } from "../controllers/post.controller.js";

const router = express.Router();

// Middleware
router.use(bodyParser.json());

// Routes
router.post("/posts", createPost);
router.post("/message", getPosts); // Change GET to POST

export default router;
