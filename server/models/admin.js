import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const adminSchema =mongoose.Schema({
    username:string,
    password:string,
    email:string,


   
},{timestamps:true}
)

;

const admin =  mongoose.model('Admin',adminSchema);

export default admin;


