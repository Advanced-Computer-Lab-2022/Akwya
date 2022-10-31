import express from "express";
import { createCourse } from "../controllers/courseController.js";
const router =express.Router()
import { viewCoursestitleI  , deleteAllInstructors,filterCoursesByPriceI, filterCoursesBySubjectI } from'../controllers/instructorController.js'



router.get('/viewCoursestitleI/:id', viewCoursestitleI )

router.get('/filterMyCoursesByPrice/:id',filterCoursesByPriceI)

router.get('/filterMyCoursesBySubject/:id',filterCoursesBySubjectI)


router.post('/:id', createCourse )

router.delete('/', deleteAllInstructors )



//router.get('/searchCourse/:title',searchCoursee)


export default router;
