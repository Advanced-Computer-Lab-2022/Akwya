
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Swal from "sweetalert2";





const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const { useState, useEffect } = require("react");
  const params = new URLSearchParams(window.location.search);
  // const instructorId = params.get('id');
  // const instructorId = window.location.href.split('/').at(4);



  const EditEmail = () => {
    const [instructors,setInstructors] = useState([]);
    const [email,setEmail] = useState(''); 

    const instructorId = window.location.href.split('/').at(4);
    console.log(instructorId);

    const [instructor,setInstructor] = useState([]);


        useEffect(()=>{
          axios.get(`http://localhost:9000/instructor/viewEmail/`+instructorId).then(
       (res) => { 
           console.log(instructor)
           setInstructor(res.data)
           setEmail(res.data[0].email)
           
       }
        );
      },[instructors]) 





    const edit =  async () => {
        await axios.get(`http://localhost:9000/instructor/editEmail/`+instructorId  +'?email='+email ).then(
       (res) => { 
           const instructors = res.data
           console.log(instructors)
           setInstructors(instructors)
           Swal.fire({
            title: 'New Email saved!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          })  
       }
        );
      
    }
return(



<div class="ganb"> 
<form className="create">

<div>
                  {instructor.map((inst) => (
                    
                  <div> <h1>Email</h1>
                    <h4 style={{display:"inline" , color:'black'}}>
                      {inst.email}</h4 ></div>
                    ))}
                    <br/>
                
       </div>
<div class="txt_field">
      <input 
        type="text" 
        id="textbox"
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        required
      />
        <label>Edit Email</label>
        </div> <br/>
                <Box sx={{marginBottom: 2,display:"inline"}}>
                <Button variant="contained"
                class="button"
                // style={{width:'300px', marginLeft:'-50px'}}
                onClick={edit}
                margin="normal"
                padding="normal"
                >Edit</Button> 
                
                </Box>

     
         </form>
                  
       </div>


      

)
   


  }
  export default  EditEmail;






