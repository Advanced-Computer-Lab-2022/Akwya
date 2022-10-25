import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things



const userSchema =mongoose.Schema({
    username: String,
    Fname: String,
    Lname: String,
    Email:String,
    password:String, 
    gender:String, 
    user_type:String, 
    country:String 
    

    
},{timestamps:true}
)

;
// module.exports = mongoose.model('user',userSchema);


const user = mongoose.model('user',userSchema);

export default user;
