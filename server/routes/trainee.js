import express from "express";
const router =express.Router()


import {getTrainee,rateCourse} from "../controllers/traineeController.js"

router.patch('/:id/rateCourse',rateCourse)

router.get('/',getTrainee)



export default router;