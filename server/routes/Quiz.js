import express from "express";
import { createQuiz, getQuiz, submitQuiz,viewGrade } from "../controllers/quizController.js";

// const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/create',createQuiz);
router.get('/TakeQuiz/:id',getQuiz)
router.post('/TakeQuiz/submitQuiz',submitQuiz)
router.get('/TakeQuiz/viewGrade/:id',viewGrade)



export default router;