import { getListItemAvatarUtilityClass } from '@mui/material';
import { useState } from 'react'
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

  const { useState } = require("react");

  const InstructorPage = () => { 


    const params = new URLSearchParams(window.location.search);
    const instructorId = params.get('instructorId');
    console.log(instructorId);

    const [instructors,setInstructors] = useState([]);


    const GetEmail =  async () => {
        await axios.get('http://localhost:9000/instructor/viewemail').then(
       (res) => { 
           const instructors = res.data
           console.log(instructors)
           setInstructors(instructors)
           
       }
        );
      
    }
return(


    <div className="View Email">
        <h3>viewProfile</h3>
        
                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={getBlogs}
                margin="normal"
                padding="normal"
                >Add Email</Button> 
                
                </Box>
            
         <div> 
            {instructors.map((instructor) => (
                <div>
                  <div >{instructor.GetEmail}</div>
                  
                </div>
              ))}
       </div>


       </div>

)
   


  }
  export default GetEmail;





