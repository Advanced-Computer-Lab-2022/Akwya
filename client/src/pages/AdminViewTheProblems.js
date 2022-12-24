// this data fetching is for the indiviudal trainee

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
import styledd from "styled-components";

const AdminViewProblems= () => {  

  const types = ["UnResolved", "Pending", "Resolved"];

  const [problems,setproblems] = useState([])
  const temp =window.location.href.split('/').at(4)  
  

const [active, setActive] = useState(types[1]);
const [showUnResolved, setshowUnResolved] = useState(false);
const [showPending, setshowPending] = useState(true);
const [showResolved, setshowResolved] = useState(false);
useEffect(()=>{
  document.getElementById('logoutbutton').hidden = false
  document.getElementById('loginbutton').hidden = true
  })
const Tab = styledd.button`
  padding: 10px 100px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  :hover {opacity: 1;  transition: ease opacity 300ms;}
  :not(:hover) {opacity: 0.6; transition: ease opacity 250ms;}
  ${({ active }) =>
    active &&
    `
  border-bottom: 3px solid black;
  opacity: 1;
`}
`;

function TabGroup() {
  return (
    <>
      <div style={{ "text-align": "center",marginBottom:"10px" }}>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}

            onClick={() => {setActive(type);switch (type) {
              case "UnResolved":
                setshowUnResolved(true);
                setshowPending(false)
                setshowResolved(false)

                
              break;
              case "Pending":
                setshowUnResolved(false);
                setshowPending(true)
                setshowResolved(false)

                
              break;
              case "Resolved":
                setshowUnResolved(false);
                setshowPending(false)
                setshowResolved(true)

                
                break;
        
              default:
                break;
            }}}
          >
            {type}
          </Tab>
        ))}
      </div>
    </>
  );
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
 


useEffect(()=>{

    axios
    .get('http://localhost:9000/course/getAllProblems')
    .then( res => {

        console.log(res)
        setproblems(res.data)
    })
    .catch(err=>{console.log(err)})
},[])






return( 


    <div style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>
        <h1>View Problems</h1>

        <TabGroup />


        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">Status</StyledTableCell>
           <StyledTableCell align="center">Problem</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Follow Ups</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {problems.map((problem) => {
            
            if (problem.status==='resolved' && showResolved){
              
            return(
            
            <TableRow id = {problem._id}


            style={{boxShadow:"10px 10px 1000px green" ,backgroundColor:'white',borderWidth:'20px',borderColor:'green' , '':'white', borderRadius: '20px', padding: '20px'}}
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#ffffff",
                width: "100%"
                }
            }}
           
              >
            
            <TableCell align="center">{problem.status}</TableCell>
              <TableCell align="center">{problem.theProblem}</TableCell>
              <TableCell align="center">{problem.category}</TableCell>
              {/* <TableCell align="center" >{problem.followUps.map(followUp =><ul>{followUp}</ul>)}</TableCell> */}
              <TableCell align="center" style={{overflow:'auto'}}>{problem.followUps}</TableCell>

               {/* <TableCell align="center" >{problem.followUps.map(followUp =><ul>{followUp}</ul>)}</TableCell> */}
               {/* <TableCell align="center" style={{overflow:'scroll'}}>{problem.followUs}</TableCell> */}


            </TableRow>
            
           ) }

           if (problem.status==='pending' && showPending){



              return(
            
                <TableRow id = {problem._id}
    
    
                style={{boxShadow:"100px 20px 1000px yellow" ,backgroundColor:'white',borderWidth:'20px',borderColor:'green' , '':'white', borderRadius: '20px', padding: '20px'}}
                hover
                sx={{
                    "&:hover":{
                    cursor: "pointer",
                    backgroundColor: "#ffffff",
                    width: "100%"
                    }
                }}
               
                  >
                   <TableCell>
                    
    
                   <form>
                  
                   <input id={'resolved'+problem._id} type="radio" name={problem._id} value="resolved" onClick={() => {document.getElementById(problem._id).style.backgroundColor = "green" ; document.getElementById('resolved'+problem._id).style.display = "none"  
                    const prob = {
    
                      id:problem._id,
                      status:'resolved'
                    };
                
                     axios.post('/course/problemState', {prob}).then(res=>{
                      Swal.fire({
                          title: 'Resolved!',
                          icon: 'success',
                          confirmButtonColor: '#38a53e',
                          confirmButtonText: 'OK'
                        }).then((result) => {
                          if (result.isConfirmed) {
                            window.location.reload();
                          }
                        })
                  }).catch(er=>{
                      console.error(er);
                  })
                  ;
                  } }/> resolved<br/>
                   </form> 
                  </TableCell> 
    
                  

                  
          
                  <TableCell align="center">{problem.theProblem}</TableCell>
                  <TableCell align="center">{problem.category}</TableCell>
                  <TableCell align="center">{problem.followUps}</TableCell>
    
                </TableRow>
            
              
          )}


          if (problem.status==='unresolved' && showUnResolved){

            return(

              <TableRow id = {problem._id}
  
  
              style={{boxShadow:"100px 20px 1000px red" ,backgroundColor:'white',borderWidth:'20px',borderColor:'green' , '':'white', borderRadius: '20px', padding: '20px'}}
              hover
              sx={{
                  "&:hover":{
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  width: "100%"
                  }
              }}
             
                >
                 <TableCell>
                  
  
                 <form>
                 <input id={'pending'+problem._id}type="radio" name={problem._id} value="pending" onClick={() => {document.getElementById(problem._id).style.backgroundColor = "yellow" ; document.getElementById('pending'+problem._id).style.display = "none"  
                ;
  
                const prob = {
  
                  id:problem._id,
                  status:'pending'
                };
            
                 axios.post('/course/problemState', {prob}).then(res=>{
                  Swal.fire({
                      title: 'Pending!',
                      icon: 'success',
                      confirmButtonColor: '#38a53e',
                      confirmButtonText: 'OK'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        window.location.reload();
                      }
                    })
              }).catch(er=>{
                  console.error(er);
              })
                
                }} /> pending<br/>
                 <input id={'resolved'+problem._id} type="radio" name={problem._id} value="resolved" onClick={() => {document.getElementById(problem._id).style.backgroundColor = "green" ; document.getElementById('resolved'+problem._id).style.display = "none" ; document.getElementById('pending'+problem._id).style.display = "none"  
    
                  const prob = {
  
                    id:problem._id,
                    status:'resolved'
                  };
              
                   axios.post('/course/problemState', {prob}).then(res=>{
                    Swal.fire({
                        title: 'Resolved!',
                        icon: 'success',
                        confirmButtonColor: '#38a53e',
                        confirmButtonText: 'OK'
                      })
                }).catch(er=>{
                    console.error(er);
                })
                ;
                } }/> resolved<br/>
                 </form> 
                </TableCell> 
  
                <TableCell align="center">{problem.theProblem}</TableCell>
                <TableCell align="center">{problem.category}</TableCell>
                <TableCell align="center">{problem.followUps}</TableCell>
  
              </TableRow>

            
        )}



            })
          
          
          }
        </TableBody>
      </Table>
    </TableContainer>
          
        </div>
                


                

           

        
        

   
)
}

export default AdminViewProblems 

