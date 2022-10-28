import express from "express";
const router =express.Router()


import {createInstructor, createAdmin, createTrainee,getAdmins} from "../controllers/adminController.js"


router.get('/',getAdmins)
router.post('/newAdmin',createAdmin)
router.post('/newInstructor',createInstructor)
router.post('/newTrainee',createTrainee)



export default router;