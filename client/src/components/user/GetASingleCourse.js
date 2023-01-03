// this data fetching is for the indiviudal trainee

import react, {useState, useEffect} from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import '../../components/courseDisplay.css'


import PaymentComponent from '../Trainee/PaymentComponent';


function MyCourse(props) {
const [courses,setCourses] = useState([])
const [error, setError] = useState(null)
const [registered,setRegistered] = useState([])
const [show,setShow] = useState(false)
const [userProgress,setUserProgress] = useState(0)

const[tobepaid, setTobepaid] = useState(100)


const CourseID = window.location.href.split('/').at(5);
const TraineeID = window.location.href.split('/').at(4);

const ID = window.location.href.split('/').at(5);
console.log(ID)
useEffect(()=>{

    axios
    .get('http://localhost:9000/course/viewACourse/'+ID)
    .then( res => {
        console.log(res)
        console.log('popp');
        setCourses(res.data)
       
        setTobepaid(Math.round((res.data[0].price-(res.data[0].price*res.data[0].promotion/100)) * rate))
    })
    .catch(err=>{console.log(err)})
},[])

let rate = 1;
let currency = 'GBP'
switch(props.country) {
    case 'United States':
      rate = 1.15;
      currency = 'USD';
      break;
    case 'Egypt (‫مصر‬‎)':
    // case 'Egypt':
      rate=27.85;
      currency = 'EGP';
      break;
    default:
      // rate = 3;
  }

  useEffect(()=>{
    axios
    .get(`http://localhost:9000/trainee/isRegistered/${CourseID}/${TraineeID}`)
    .then( res => {
        console.log(res)
        setRegistered(res.data)
    })
    .catch(err=>{console.log(err)})
},[])


  const handleSubmit3 = async (e) => {
    e.preventDefault()

    const respnse= await fetch(`http://localhost:9000/admin/requestAccess/${TraineeID}/${CourseID}`, {
        method: 'GET',
    })  
    const json= await respnse.json()

    if(!respnse.ok){
        setError(json.error)
        Swal.fire({
            title: 'Your Request is Currently Pending...',
            icon: 'info',
            confirmButtonColor: '#1976d2',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
            }
          })
    }
    if(respnse.ok){
        console.log("Course Successfully Requested!")
        Swal.fire({
            title: 'Course Successfully Requested!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                        }
          })  
        setError(null)
    } 
}


  const handleSubmit4 = async (e) => {
    e.preventDefault()

       const respnsee= await fetch(`http://localhost:9000/trainee/getUserProgress/${TraineeID}/${CourseID}`, {
        method: 'GET',
    })  
    const jsonn= await respnsee.json()
    if(respnsee.ok){
        if(jsonn>=50){
            Swal.fire({
                title: 'Refund Denied.',
                text:'you passed more than 50% of the course. ',
                icon: 'error',
                confirmButtonColor: '#990000',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                    // window.location.reload();
                }
              }) 
              return; 
        
        }
    }
    


    const respnse= await fetch(`http://localhost:9000/trainee/requestRefund/${TraineeID}/${CourseID}`, {
        method: 'GET',
    })  
    const json= await respnse.json()

    if(!respnse.ok){
        Swal.fire({
            title: 'Refund Request Pending..',
            icon: 'info',
            confirmButtonColor: '#3fc3ee',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                // window.location.reload();
            }
          })  
        setError(null)    }
    if(respnse.ok){
        Swal.fire({
            title: 'Refund Request Sent!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                // window.location.reload();
            }
          })  
        setError(null)
    } 
}

  const handleSubmit2 = async (e) => {
    e.preventDefault()

    const respnse= await fetch(`http://localhost:9000/trainee/refund/${TraineeID}/${CourseID}`, {
        method: 'GET',
    })  
    const json= await respnse.json()

    if(!respnse.ok){
        setError(json.error)
    }
    if(respnse.ok){
        console.log("Course Successfully Dropped!")
        Swal.fire({
            title: 'Course Successfully Dropped!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })  
        setError(null)
    } 
}


const handleSubmit = async (e) => {
    e.preventDefault()

    const respnse= await fetch(`http://localhost:9000/trainee/register/${CourseID}/${TraineeID}`, {
        method: 'GET',
    })  
    const json= await respnse.json()

    if(!respnse.ok){
        Swal.fire({
            title: json.message,
            icon: 'error',
            confirmButtonColor: '#990000',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                // window.location.reload();
            }
          })
    }
    if(respnse.ok){
        console.log("Course Successfully Registered!")
        Swal.fire({
            title: 'Course Successfully Registered!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })  
        setError(null)
    } 
}
const payWallet = async (e) => {
    e.preventDefault()

    const respnse= await fetch(`http://localhost:9000/trainee/registerCourseWallet/${CourseID}/${TraineeID}`, {
        method: 'GET',
    })  
    const json= await respnse.json()

    if(!respnse.ok){
        console.log("not enoguh")
        Swal.fire({
            
            title: "not enough money in the wallet",
            icon: 'error',
            confirmButtonColor: '#990000',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                // window.location.reload();
            }
          })
    }
    if(respnse.ok){
        console.log("paid")
        Swal.fire({
            title: 'Amount paid Successfully ',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })  
        setError(null)
    } 
}
      
   
   




if(window.location.href.split('/').at(3)=='userCorporate'){
    if(JSON.stringify(registered).length==2){

        return(

            <div>
            <div class="courseDisplay2">
                
                <ul>
        
                    {courses.map(course => <p key={course._id}><h3>Title: {course.title} </h3>  
                                                        <h3>Total Hours: {course.totalHours}</h3> 
                                                        <h3>Rating: {course.rating}</h3> 
                                                        <h3>Summary: {course.summary}</h3></p>)}
        
                </ul>
                
        
            </div>
            <br/>
            
            <div class="courseDisplay3">
            <form className="create" onSubmit={handleSubmit}> 
                    <Box sx={{marginBottom: 5}}>
                        <Button variant="contained"
                        margin="normal"
                        padding="normal"
                        onClick={handleSubmit3}
                        >Request Access to This Course</Button> 
                        
                        </Box>
                   {error && <div className="error">{error}</div>}
                </form>
                </div>
                </div>
        )
        }
        //registerCourseWallet
     
    



  return(
    <div class="courseDisplay2">
        
        <h1>Course Details</h1>
        <ul>

            {courses.map(course => <li key={course._id}>Title: {course.title} Total Hours: {course.totalHours} Rating: {course.rating} Summary: {course.summary}</li>)}
           

        </ul>
    

    </div>
)
}


if(window.location.href.split('/').at(3)=='guest'){
    return(
        <div class="courseDisplay2">
        <h1>Course Details</h1>
            <ul>
    

            {courses.map(course => <li style={{"display": "inline-flex"}} key={course._id}>Title: {course.title} Price: <s style={{display: course.promotion==0 ? 'none' : 'block',"margin-inline":"5px"}}>{course.price} </s>  {(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)} Total Hours: {course.totalHours} Rating: {course.rating} Summary: {course.summary}</li>)}
               
                {courses.map(course => <p key={course._id}><h3>Title: {course.title} </h3>  
                                                        <h3>Price: {(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)} </h3> 
                                                        <h3>Total Hours: {course.totalHours}</h3> 
                                                        <h3>Rating: {course.rating}</h3> 
                                                        <h3>Summary: {course.summary}</h3></p>)}
    
            </ul>
    
        </div>
    )
    
}

if(JSON.stringify(registered).length==2){
    return(
      <div>
     <div class="courseDisplay2">
        <h1>Course Details</h1>
        <ul>

            {courses.map(course => <p key={course._id}><h3>Title: {course.title} </h3>  
                                                        <h3>Price: <s style={{display: course.promotion==0 ? 'none' : 'block',"margin-inline":"5px"}}>{course.price} </s> <div id="tobepaid"> {(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)} </div></h3>                                                         <h3>Total Hours: {course.totalHours}</h3> 
                                                        <h3>Rating: {course.rating}</h3> 
                                                        <h3>Summary: {course.summary}</h3></p>)}

           

        </ul>
        

       </div>
        <form className='wallet ' onSubmit={payWallet}>
          
  <h2>Add Course</h2>
  <h4>Choose Payment Method</h4>
  <br/>
  <button  style={{ width:'200px', height:'50px',fontSize:'18px', fontWeight:'700', color:'white',  borderRadius: '25px',   background: '#2691d9',"marginBottom":"30px" }}>Pay with Wallet</button>
</form>
<h7>OR</h7><br/>
<h3>Credit Card</h3>
        <PaymentComponent t={TraineeID} c={CourseID} p={tobepaid}
    keys={{
        stripe: "pk_test_51MIFP2HUXZhuMagYneFzG4qHkSG50EXSNItMTONiK5113unZ0HzFho1rwLowL312VWCsK1IToWcIUXT5N7VZZExJ008w6439EK",
    }}
/>


<br/>

</div>
)
} 
return(

    <div>
    <div class="courseDisplay3">


        
        {/* { <form className="create" onSubmit={handleSubmit2}> 
          <button style={{ width:'200px', fontSize:'18px', fontWeight:'700', color:'white',  borderRadius: '25px',   background: '#2691d9' }} >Drop Course</button>
          {error && <div className="error">{error}</div>}
        </form> } */}
        <form className="create" onSubmit={handleSubmit4}> 

          <button style={{ width:'200px', fontSize:'18px', fontWeight:'700', color:'white',  borderRadius: '25px',   background: '#2691d9' }} >Request Refund</button>

          {error && <div className="error">{error}</div>}
        </form>

 </div>
    <div class="courseDisplay2">

            {courses.map(course => <p key={course._id}><h3>Title: {course.title} </h3>  
                                                        <h3>Price: {(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)} </h3> 
                                                        <h3>Total Hours: {course.totalHours}</h3> 
                                                        <h3>Rating: {course.rating}</h3> 
                                                        <h3>Summary: {course.summary}</h3></p>)}

        
        </div>

            </div>



       

)
}

export default MyCourse 

