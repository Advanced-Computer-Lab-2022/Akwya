import express from "express";
// import user from "/Users/farahwanas/Desktop/Akwya/server/models/user.js";
import course from '../models/course.js';
const router =express.Router()
// const userr=new user

router.get('/',(req,res)=>{
    res.json({mssg:'Get all courses'})

})

router.get('/:id',(req,res)=>{
    res.json({mssg:'Get a single guests'})

})

router.post('/',async(req,res)=>{
    const {title,
        subject,
        totalHours,
        price,
        rating,
        review,
        subtitle, 
        summary, 
        excercises, 
        youtubeVideo, 
        promotion, 
        promotionDuration, 
        progress}=req.body

    
    try {
        const newCourse = await course.create({title,
            subject,
            totalHours,
            price,
            rating,
            review,
            subtitle, 
            summary, 
            excercises, 
            youtubeVideo, 
            promotion, 
            promotionDuration, 
            progress});
res.status(200).json(newCourse)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     
    res.json({mssg:'post a new course'})

})


 


router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete a guest'})

})

router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a guest'})

})

export default router;