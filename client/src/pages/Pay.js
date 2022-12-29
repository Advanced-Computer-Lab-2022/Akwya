
// import react, {useState, useEffect} from 'react'
// import axios from 'axios'
// import Swal from "sweetalert2";
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import PaymentComponent from '../Trainee/PaymentComponent';


// const handleSubmit = async (e) => {
//     e.preventDefault()

//     const respnse= await fetch(`http://localhost:9000/trainee/register/${CourseID}/${TraineeID}`, {
//         method: 'GET',
//     })  
//     const json= await respnse.json()

//     if(!respnse.ok){
//         setError(json.error)
//     }
//     if(respnse.ok){
//         console.log("Course Successfully Registered!")
//         Swal.fire({
//             title: 'Course Successfully Registered!',
//             icon: 'success',
//             confirmButtonColor: '#38a53e',
//             confirmButtonText: 'OK'
//           }).then((result) => {
//             if (result.isConfirmed) {
//                 window.location.reload();
//             }
//           })  
//         setError(null)
//     } 



// return(
//     <form className="create" onSubmit={handleSubmit}> 

// <PaymentComponent
//     keys={{
//         stripe: "pk_test_51MIFP2HUXZhuMagYneFzG4qHkSG50EXSNItMTONiK5113unZ0HzFho1rwLowL312VWCsK1IToWcIUXT5N7VZZExJ008w6439EK",
//     }}
// />
// </form>

// )
// }
// export default handleSubmit;