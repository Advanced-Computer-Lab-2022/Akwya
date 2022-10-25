import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const exerciseSchema =mongoose.Schema({
    username:string,
    password:string,
    email:string,


   
},{timestamps:true}
)

;

const exercise =  mongoose.model('Exercise',traineeSchema);

export default exercise;


