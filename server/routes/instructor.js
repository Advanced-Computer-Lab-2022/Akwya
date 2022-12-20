import express from "express";
import { createCourse } from "../controllers/courseController.js";
const router =express.Router()
import { searchCourseI, viewCoursestitleI  , deleteAllInstructors,filterCoursesByPriceI, filterCoursesBySubjectI, 
filterCoursesByRatingAndSubject, addVideo ,viewVideos,viewEmail ,editEmail,editBio, CanViewVideos, addPreview, viewPreview, 
ViewRating, getRatings,changePassword,checkPassword,logout,notFirst} from'../controllers/instructorController.js'


router.get('/viewCoursestitleI/:id', viewCoursestitleI )

router.get('/filterMyCoursesByPrice/:id',filterCoursesByPriceI)

router.get('/filterMyCoursesBySubject/:id',filterCoursesBySubjectI)


router.get('/search/:id/:search',searchCourseI)

router.get('/filterCoursesByRatingAndSubject',filterCoursesByRatingAndSubject)


router.post('/:id', createCourse )

router.delete('/', deleteAllInstructors )

router.post('/addVideo/:courseID', addVideo )

router.post('/addPreview/:courseID', addPreview )

router.get('/viewVideos/:courseID', viewVideos )

router.get('/viewPreview/:courseID', viewPreview )

router.get('/CanViewVideos/:courseID/:instructorID', CanViewVideos )

router.get('/viewEmail/:id', viewEmail )

router.get('/editEmail/:id', editEmail )

router.get('/viewRating/:id', ViewRating )

router.get('/changePassword/:id', changePassword)

router.get('/checkPassword/:id', checkPassword)


router.get('/editBio/:id', editBio )


router.get('/getRatings/:id', getRatings )

router.get('/:id/myRating', ViewRating)

// router.get('/resetPassword/', resetPassword)

router.get('/logout', logout)

router.get('/notFirst/:id', notFirst)


export default router;
