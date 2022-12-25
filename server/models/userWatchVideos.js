import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things



const userWatchVideosSchema =mongoose.Schema({

    VideoID:String,
    TraineeID:String,
    CourseID:String


}, { timestamps: true }
)

    ;

const userWatchVideos =  mongoose.model('userWatchVideos',userWatchVideosSchema);


export default userWatchVideos;


