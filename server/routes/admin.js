import express from "express";
const router =express.Router()



import {createInstructor, createAdmin, createTrainee,getAdmins,courseDiscountAdmin, promotionFound ,refundTrainee,grantAccess,requestAccess,viewRequests} from "../controllers/adminController.js"



router.get('/',getAdmins)
router.get('/refundTrainee',refundTrainee)
router.post('/newAdmin',createAdmin)
router.post('/newInstructor',createInstructor)
router.post('/newTrainee',createTrainee)


router.get('/courseDiscountAdmin/:id',courseDiscountAdmin)

router.get('/promotionFound/:id', promotionFound)

router.get('/GrantAccess/:TraineeID/:CourseID', grantAccess)

router.get('/RequestAccess/:TraineeID/:CourseID', requestAccess)

router.get('/viewRequests/', viewRequests)

export default router;