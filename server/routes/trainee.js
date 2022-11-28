import express from "express";
const router =express.Router()


import {getTrainee, changePassword} from "../controllers/traineeController.js"


router.get('/',getTrainee)


router.get('/changePassword/:id',changePassword)

export default router;