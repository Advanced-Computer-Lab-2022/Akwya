import mongoose from 'mongoose';


//mongoose allows us to have some sort of uniformity: each post have to have these things
const problemSchema = mongoose.Schema({

    status: String,

    ownerID:{  
        type: String, 
        // type:mongoose.Types.ObjectId, 
        // require:true

    },


    courseid:{ 
        type:mongoose.Types.ObjectId, 
        // ref: course,
        // require:true

    }, 

    coursename: String,

    category: {
        type: String, 
        required: true
        },

    theProblem: {
        type: String, 
        // required: true
        }, 
        
    followUps:[], 
    messages:[] 

}, { timestamps: true }
);

const problem = mongoose.model('problem', problemSchema);


export default problem;


