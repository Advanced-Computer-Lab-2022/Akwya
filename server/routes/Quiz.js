import express from "express";
import { createQuiz, getQuiz, setChosenAnswer } from "../controllers/quizController.js";

// const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/create',createQuiz);
router.get('/TakeQuiz/:id',getQuiz)
router.post('/TakeQuiz/submitChosen',setChosenAnswer)



export default router;