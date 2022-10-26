import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const subtitleSchema = mongoose.Schema({

    courseID: Number,
    name: String,
    videos: [{ video: String, description: String }],
    summary: String,
    totalHours: Number,
    exercises: [{ exerciseID: Number }],
    examID: Number


}, { timestamps: true }
)

    ;

const subtitle = mongoose.model('Subtitle', subtitleSchema);

export default subtitle;


