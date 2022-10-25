import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const subtitleSchema =mongoose.Schema({
    username:string,
    password:string,
    email:string,


   
},{timestamps:true}
)

;

const subtitle =  mongoose.model('Subtitle',subtitleSchema);

export default subtitle;


