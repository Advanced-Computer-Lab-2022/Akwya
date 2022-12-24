import express from "express";
import { resetQuiz, createQuiz, getQuiz, submitQuiz,viewGrade,viewQuestionGrade } from "../controllers/quizController.js";

// const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/create',createQuiz);
router.get('/TakeQuiz/:id',getQuiz)
router.post('/TakeQuiz/submitQuiz',submitQuiz)
router.post('/TakeQuiz/resetQuiz/:id',resetQuiz)

router.get('/TakeQuiz/viewGrade/:id/:level',viewGrade)
router.get('/TakeQuiz/viewQuestionGrade/:id/:quiz',viewQuestionGrade)



export default router;