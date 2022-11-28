import express from "express";
const router =express.Router()




import {getTrainee,registerCourse,isRegistered,dropCourse,rateCourse,changePassword} from "../controllers/traineeController.js"

router.patch('/:id/rateCourse',rateCourse)

router.get('/',getTrainee)

router.get('/register/:courseID/:traineeID',registerCourse)

router.get('/drop/:courseID/:traineeID',dropCourse)

router.get('/isRegistered/:courseID/:traineeID',isRegistered)

router.get('/changePassword/:id',changePassword)

export default router;