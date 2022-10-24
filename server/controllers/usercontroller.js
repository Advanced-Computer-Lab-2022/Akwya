import user from '../models/user.js';




export const getAllUser= async(req,res) => {

    try{  
        const user= await user.find();
        res.status(200).json(user)
    }

    catch(error){
        res.status(400).json({message: error.message})
    }
}
export const createUser= async(req,res) => {
    const {username,Fname,Lname,Email,password,gender,user_type,country}=req.body

    
    try {
        const userr = await userrr.create({username,Fname,Lname,Email,password,gender,user_type,country});
res.status(200).json(userr)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
     
    res.json({mssg:'post a new guests'})

}

        //get a single user
export const getUser= async(req,res) => {
            const {usernamer} =req.params

            if(!mongogoose.Type.objectUsername.isvalid(usernamer)){
                return res.status(404).json({error:'no user found' })
            }
            res.status(200).json(user)
        }







        //to delete a user
    export const deleteUser = async(req , res) => {
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
    export  const updateUser= async(req, res) => {
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



   
