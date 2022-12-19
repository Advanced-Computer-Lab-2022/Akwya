import express from "express";
const router =express.Router()



import {createInstructor, createAdmin, createTrainee,getAdmins,courseDiscountAdmin, promotionFound ,refundTrainee} from "../controllers/adminController.js"



router.get('/',getAdmins)
router.get('/refundTrainee',refundTrainee)
router.post('/newAdmin',createAdmin)
router.post('/newInstructor',createInstructor)
router.post('/newTrainee',createTrainee)


router.get('/courseDiscountAdmin/:id',courseDiscountAdmin)

router.get('/promotionFound/:id', promotionFound)

export default router;