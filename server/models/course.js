import mongoose from 'mongoose';
import instructor from './instructor.js';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const courseSchema = mongoose.Schema({

    title: String,
    subtitles: { subtitleID: [Number] },
    price: Number,
    summary: String,
    subject: String,
    instructor: {type:mongoose.Types.ObjectId, ref: instructor},
    totalHours: Number,
    rating: Number,
    noOfRatings: [{rate:Number,review:String}],// [{ actualRating: Number, ratings: [{ rate: Number, ownerName: String, ownerID: Number }] }],
    // reviews: [{ review: { comment: String, ownerName: String, ownerID: Number } }],
    promotion: Number,
    promotionExpiry: Date,
    previewVideo: String,
    // certificate: String



}, { timestamps: true }
)

    ;

const course = mongoose.model('Course', courseSchema);

export default course;


