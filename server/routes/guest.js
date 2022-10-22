const express= require('express')

const router =express.Router()

router.get('/',(req,res)=>{
    res.json({mssg:'Get all workouts'})

})

router.get('/:id',(req,res)=>{
    res.json({mssg:'Get a single workouts'})

})

router.post('/',(req,res)=>{
    res.json({mssg:'post a new workout'})

})

router.post('/',(req,res)=>{
    res.json({mssg:'post a new workout'})

})

router.post('/',(req,res)=>{
    res.json({mssg:'post a new workout'})

})

module.exports=router