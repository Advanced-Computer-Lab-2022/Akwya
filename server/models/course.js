import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const courseSchema =mongoose.Schema({
    title: String,
    subject:String,
    //Laterrrr instructor:{user:},
    totalHours: Number,
    price: Number,
    //videos:String,
    rating:Number,
    review:String,
    subtitle:String, //Laterrrr
    summary:String, 
    excercises:String, //Laterrrr
    youtubeVideo:String, //Laterrrr
    promotion:Number, //Laterrrr
    promotionDuration:Number, //Laterrrr
    progress:Number 


   
},{timestamps:true}
)

;
module.exports = mongoose.model('Course',courseSchema);


