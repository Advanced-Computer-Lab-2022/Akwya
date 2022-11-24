import mongoose from 'mongoose';
import course from './course.js';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const videoSchema = mongoose.Schema({

    title: String,
    url: String,
    courseID: {type:mongoose.Types.ObjectId, ref: course},
    summary: String,
    totalHours: Number,


}, { timestamps: true }
)

    ;

const video = mongoose.model('Video', videoSchema);

export default video;


