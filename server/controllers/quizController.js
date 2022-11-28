import quiz from '../models/Quiz.js';

const createQuiz =  (req, res) => {
    console.log("shshs");
    let newQuiz=  new quiz({
        ...req.body.quizz,
        createdBy:req.body.createdBy
    });
    newQuiz.save().then(result => {
        res.status(200).json({success: true});
        })
}



const getQuiz = async (req, res) => {
    try {
        
        const objs = await quiz.find({courseid:{$eq:req.params.id}})

                res.json(objs)

    } catch (error) {

        res.json({message: error}); }
    }


const submitQuiz = async (req, res) => {
    console.log('ana hena')

    
    try {
            
            const {updatedQuiz} = req.body
            console.log('ana hena')

            console.log(req.body)
            const updateQuizz = await quiz.findOneAndReplace({_id:req.body._id},{updatedQuiz})
            //  ({_id:updatedQuiz._id},{questions:{updatedQuiz.question}, {new: true});

            
                    res.json(updateQuizz)
    
        } catch (error) {
    
            res.json({message: error}); }
        }   


     
     
    //  const addPreview = async (req, res) => {
    //     const { previewVideo } = req.body;
    
    // const courseID = req.params.courseID
    
    //     try {
    //         const newVideo = await course.findOneAndUpdate({_id:req.params.courseID},{previewVideo:previewVideo},{
    //             new: true}  );
    //         res.status(200).json(newVideo)
    //     } catch (error) {
    //         res.status(400).json({ error: error.message })
    //     }
    
    //     console.log("tmm")
    // }
     
     
     




export{createQuiz,getQuiz,submitQuiz}