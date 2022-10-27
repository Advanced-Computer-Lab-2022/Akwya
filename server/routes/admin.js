import express from "express";
const router =express.Router()


import {createInstructor, createAdmin, createTrainee} from "../controllers/adminController.js"



router.post('/newAdmin',createAdmin)
router.post('/newInstructor',createInstructor)
router.post('/newTrainee',createTrainee)



export default router;