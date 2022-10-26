import mongoose from 'mongoose';
//mongoose allows us to have some sort of uniformity: each post have to have these things
const problemSchema = mongoose.Schema({

    status: String,
    ownerID: Number

}, { timestamps: true }
)

    ;

const problem = mongoose.model('Trainee', problemSchema);

export default problem;


