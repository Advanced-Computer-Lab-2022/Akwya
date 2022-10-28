import express from "express";
const router =express.Router()


import {getTrainee} from "../controllers/adminController.js"


router.get('/',getTrainee)



export default router;