import express from "express";
const router =express.Router()




import {getTrainee,registerCourse,isRegistered,dropCourse,rateCourse,changePassword, rateInstructor,checkPassword,resetPassword
,getWallet,videoCount,sendCertificate,signUp,login,logout,userWatchVideo,getUserProgress,refundCourse,requestRefund,myCourses} from "../controllers/traineeController.js"

router.patch('/:id/rateCourse',rateCourse)

router.patch('/:id/rateInstructor',rateInstructor)


router.get('/',getTrainee)

router.get('/register/:courseID/:traineeID',registerCourse)

router.get('/drop/:courseID/:traineeID',dropCourse)

router.get('/isRegistered/:courseID/:traineeID',isRegistered)

router.get('/changePassword/:id',changePassword)

router.get('/checkPassword/:id',checkPassword)

router.get('/resetPassword/', resetPassword)

router.get('/getWallet/:id', getWallet) 


router.get('/videoCount/:CourseID', videoCount)

router.get('/sendCertificate/:TraineeID/:CourseID', sendCertificate)

router.post('/signup', signUp);

router.post('/login', login);

router.get('/logout', logout);

router.get('/userWatchVideo/:TraineeID/:VideoID', userWatchVideo);

router.get('/getUserProgress/:TraineeID/:CourseID', getUserProgress);

router.get('/refund/:TraineeID/:CourseID', refundCourse);

router.get('/requestRefund/:TraineeID/:CourseID', requestRefund);

router.get('/myCourses/:TraineeID', myCourses);

export default router;