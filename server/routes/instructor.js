import express from "express";
import { viewCoursesPrices } from "../controllers/courseController.js";
const router =express.Router()
import {getInstructors, viewCoursesI , viewCoursesPricesI, filterCoursesOnSubjAndRatingI , filterCoursesByPriceI ,searchCourseI , viewACourseI , viewCoursestitleI , filterCoursesByInstructorI , createCourseI, deleteAllInstructors } from'../controllers/instructorController.js'

router.get('/',viewCoursesI)

router.get('/getInstructors',getInstructors)


router.get('/viewCoursesPrices',viewCoursesPricesI)

router.get('/filterCoursesOnSubjAndRating/:id/:title',filterCoursesOnSubjAndRatingI)


//router.get('/filterCoursesByPrice/:x/:y', filterCoursesByPrice)
router.get('/filterCoursesByPrice/:x/:y',  filterCoursesByPriceI)

router.get('/search/:title',searchCourseI)

router.get('/viewACourse/:titlee', viewACourseI)

router.get('/viewACourse', viewCoursestitleI )

router.get('/filterCoursesByInstructor/:instructorr:]/:subjectt/:pricee',filterCoursesByInstructorI )


router.post('/createCourse', createCourseI )

router.delete('/', deleteAllInstructors )



//router.get('/searchCourse/:title',searchCoursee)


export default router;
