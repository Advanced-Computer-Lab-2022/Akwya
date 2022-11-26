import express from "express";
const router =express.Router()


import {getTrainee,registerCourse,isRegistered,dropCourse} from "../controllers/traineeController.js"


router.get('/',getTrainee)

router.get('/register/:courseID/:traineeID',registerCourse)

router.get('/drop/:courseID/:traineeID',dropCourse)

router.get('/isRegistered/:courseID/:traineeID',isRegistered)


export default router;