import user from '../models/user.js';
import user from '../models/user.js'
import user from '../models/user.js'




export const getUser= async(req,res) => {

    try{  
        const user= await user.find();
        res.status(200).json(user)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}
    export const createUser= async(req,res) => {
        const user=req.body;
        const newUser= new user(user);
        try{
            await new user.save();
            res.status(201).json(newUser)
        }
        catch(error){
            res.status(409).json({message: error.message})
        }



        //get a single user
        const getUser= async(req,res) => {
            const {usernamer} =req.params

            if(!mongogoose.Type.objectUsername.isvalid(usernamer)){
                return res.status(404).json({error:'no user found' })
            }
            res.status(200).json(user)
        }







        //to delete a user
    const deleteUser = async(req , res) => {
        const {username} =req.params

        if(!mongogoose.Type.objectUsername.isvalid(username)){
            return res.status(404).json({error:'no user found' })
        }
        const user= await user.findOneAndDelete({_username: username})
        if(!username){
            return res.status(404).json({error: 'no such user'})
        }
        res.status(200).json(user)
    }


    //update a user
        const updateUser= async(req, res) => {
        const {username} =req.params

        if(!mongogoose.Type.objectUsername.isvalid(username)){
            return res.status(404).json({error:'no user found' })
    }
    const user= await user.findOneAndUpdate({_username: username} ,{
        ...req.body
    })
    if(!username){
        return res.status(404).json({error: 'no such user'})
    }
    res.status(200).json(user)
}

}

   
