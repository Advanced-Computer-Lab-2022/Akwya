import express from "express";
import { createCourse, viewCoursesPrices } from "../controllers/courseController.js";
const router =express.Router()
import {getInstructors, viewCoursesI , viewCoursesPricesI, filterCoursesOnSubjAndRatingI  ,searchCourseI , viewACourseI , viewCoursestitleI  , deleteAllInstructors,filterCoursesByPriceI, filterCoursesBySubjectI } from'../controllers/instructorController.js'

router.get('/',viewCoursesI)

router.get('/getInstructors',getInstructors)


router.get('/viewCoursesPrices',viewCoursesPricesI)

router.get('/filterCoursesOnSubjAndRating/:id/:title',filterCoursesOnSubjAndRatingI)


router.get('/search/:title',searchCourseI)

router.get('/viewACourse/:titlee', viewACourseI)

router.get('/viewCoursestitleI/:id', viewCoursestitleI )

router.get('/filterMyCoursesByPrice/:id',filterCoursesByPriceI)

router.get('/filterMyCoursesBySubject/:id',filterCoursesBySubjectI)


router.post('/:id', createCourse )

router.delete('/', deleteAllInstructors )



//router.get('/searchCourse/:title',searchCoursee)


export default router;
