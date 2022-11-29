import express from "express";
const router =express.Router()




import {getTrainee,registerCourse,isRegistered,dropCourse,rateCourse,changePassword, rateInstructor,checkPassword,resetPassword} from "../controllers/traineeController.js"

router.patch('/:id/rateCourse',rateCourse)

router.patch('/:id/rateInstructor',rateInstructor)


router.get('/',getTrainee)

router.get('/register/:courseID/:traineeID',registerCourse)

router.get('/drop/:courseID/:traineeID',dropCourse)

router.get('/isRegistered/:courseID/:traineeID',isRegistered)

router.get('/changePassword/:id',changePassword)

router.get('/checkPassword/:id',checkPassword)

router.get('/resetPassword/', resetPassword)

export default router;