import express from "express";
const router =express.Router()


import {getTrainee} from "../controllers/traineeController.js"


router.get('/',getTrainee)



export default router;