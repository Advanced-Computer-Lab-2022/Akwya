import express from "express";
import { createCourse } from "../controllers/courseController.js";
const router =express.Router()
import { searchCourseI, viewCoursestitleI  , deleteAllInstructors,filterCoursesByPriceI, filterCoursesBySubjectI, 
filterCoursesByRatingAndSubject, addVideo ,viewVideos,viewEmail ,editEmail, CanViewVideos, addPreview, viewPreview} from'../controllers/instructorController.js'


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





//router.get('/searchCourse/:title',searchCoursee)


export default router;
