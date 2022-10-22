import express from "express";
// import user from "/Users/farahwanas/Desktop/Akwya/server/models/user.js";
import userrr from '/Users/farahwanas/Desktop/Akwya/server/models/user.js';
const router =express.Router()
// const userr=new user

router.get('/',(req,res)=>{
    res.json({mssg:'Get all guests'})

})

router.get('/:id',(req,res)=>{
    res.json({mssg:'Get a single guests'})

})

router.post('/',async(req,res)=>{
    const {username,Fname,Lname,Email,password,gender,user_type,country}=req.body

    
    try {
        const userr = await userrr.create({username,Fname,Lname,Email,password,gender,user_type,country});
res.status(200).json(userr)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     
    res.json({mssg:'post a new guests'})

})


 


router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete a guest'})

})

router.patch('/:id',(req,res)=>{
    res.json({mssg:'update a guest'})

})

export default router;