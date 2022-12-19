import express from "express";
const router =express.Router()


import {createInstructor, createAdmin, createTrainee,getAdmins, refundTrainee} from "../controllers/adminController.js"


router.get('/',getAdmins)
router.get('/refundTrainee',refundTrainee)
router.post('/newAdmin',createAdmin)
router.post('/newInstructor',createInstructor)
router.post('/newTrainee',createTrainee)



export default router;