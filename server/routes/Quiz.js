import express from "express";
import { createQuiz } from "../controllers/quizController.js";

// const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/create',createQuiz);



export default router;