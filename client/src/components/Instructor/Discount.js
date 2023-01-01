
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
import react, {useEffect} from 'react'
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

  const Discount = () => { 

    const [instructor,setInstructor] = useState([])

    const ID = window.location.href.split('/').at(5);
    const instructorID = window.location.href.split('/').at(4);

    useEffect(()=>{
      axios
      .get(`http://localhost:9000/instructor/CanViewVideos/${ID}/${instructorID}`)
      .then( res => {
          console.log(res)
          setInstructor(res.data)
      })
      .catch(err=>{console.log(err)})
  },[])


    const params = new URLSearchParams(window.location.search);
    
    const courseId = window.location.href.split('/').at(5);

    console.log(courseId)
    

    

    const [instructors,setInstructors] = useState([]);
    const [ promotion,setPromotion] = useState(0);
    const [price ,setPrice]=useState(0);

    const [promotionStart,setPromotionStart]=useState('');
    const [promotionExpiry,setPromotionExpiry] = useState('');
    const [valid, setValid] = useState(false);

    
    const checkDates = (courseId) => {


      const month=promotionExpiry.split('-').at(1)
      const year=promotionExpiry.split('-').at(0)
      const day =promotionExpiry.split('-').at(2)
      const today=new Date()
    
     
    
        if((new Date(promotionExpiry))<(new Date(promotionStart))){
          Swal.fire({
            title: 'Invalid date!',
            icon: 'error',
            confirmButtonColor: '#990000',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })
          return;
        }
      if(parseInt(year)==today.getFullYear() ){
        if(parseInt(month) <(today.getMonth() + 1)){
          Swal.fire({
            title: 'Invalid date!',
            icon: 'error',
            confirmButtonColor: '#990000',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })
          return
        }
        else if(parseInt(month) ==(today.getMonth() + 1)){
            if(parseInt(day)<(today.getDay())){
              Swal.fire({
                title: 'Invalid date!',
                icon: 'error',
                confirmButtonColor: '#990000',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              })
              return;
          
          } else {
            //day = or >
            edit(courseId);
          }
        } else {
          //month akbr
          edit(courseId);
        }
       
        }
        else if(parseInt(year)<today.getFullYear()) {
          Swal.fire({
            title: 'Invalid date!',
            icon: 'error',
            confirmButtonColor: '#990000',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })
          return;
          
        }
    else {
      //year akbr
      edit(courseId);
    }
        
    
    
    }
    


    const edit =  async () => {
      if(promotionExpiry==""){
        Swal.fire({
          title: 'Error Please Enter a Valid Date!',
          icon: 'error',
          confirmButtonColor: '#38a53e',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            // window.location.reload();
          }
        })  
      }else{
        if(promotion==0){
          Swal.fire({
            title: 'Discount Value Cant be Zero!',
            icon: 'error',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              // window.location.reload();
            }
          })  
        }else{
          await axios.get(`http://localhost:9000/course/courseDiscount/`+courseId +'?promotion='+ promotion ).then(
          (res) => { 
            
              
               console.log(courseId)
               
               console.log(res.data['price'])
               setPrice(res.data['price'])
               
               console.log(promotion)
              
   
               const newPrice=res.data['price']-(res.data['price']*(promotion/100))
               
               setPrice(newPrice)
               console.log(newPrice)
   
               Swal.fire({
                 title: 'New Promotion added!',
                 icon: 'success',
                 confirmButtonColor: '#38a53e',
                 confirmButtonText: 'OK'
               }).then((result) => {
                 if (result.isConfirmed) {
                   window.location.reload();
                 }
               })  
               
               // if(promotion!=0){
                 console.log("calling date")
                 date2(courseId)
                 date(courseId)
               // }
            
          }
           );
      }
        }
        
       
     

    }


const date2 =  async () => {
  await axios.get(`http://localhost:9000/course/courseDiscount/`+ courseId +'?promotionStart='+promotionStart ).then(
 (res) => { 

  

  setPromotionStart(res.data['promotionStart'])

  const promotionStart = res.data['promotionStart']
  console.log(promotionStart)
  

 }
  );


}
    const date =  async () => {
      await axios.get(`http://localhost:9000/course/courseDiscount/`+ courseId +'?promotionExpiry='+ promotionExpiry ).then(
     (res) => { 

      

      // setPromotionStart(res.data['promotionStart'])
      setPromotionExpiry(res.data['promotionExpiry'])
      // const promotionExpiry = res.data['promotionExpiry']
      console.log(promotionExpiry)
      

     }
      );
   

  }



  if(JSON.stringify(instructor).length==2){
    // console.log(JSON.stringify(instructor).length+" instructor ");
    // console.log(instructorID+" instructor id from url");
    
    return;
}


return(


    <div className="Dicount">

      <form onSubmit={edit}>

      <h3>Add a New Discount</h3>

<label>Enter Discount Percentage: </label>
      <input 
        type="number" 
        id="bio"
        min = "0"
        max = "100"
        onChange={(e) => setPromotion(e.target.value)} 
        value={promotion}
        required
      />



       <label> Discount starting from: </label>    

                <input 
        type="date"
        required 
        id="xx"
        placeholder='01/01/2023'
        onChange={(e) =>setPromotionStart(e.target.value)} 
        value={promotionStart}
      />
        
        

       <label> Discount valid till: </label>    

                <input 
        type="date"
        required 
        id="xx"
        placeholder='01/01/2023'
        onChange={(e) =>setPromotionExpiry(e.target.value)} 
        value={promotionExpiry}
      />
        
        
                <Box sx={{marginBottom: 2,marginLeft: 2 ,display:"inline"}}>
                <Button variant="contained"
                onClick={edit}
                margin="normal"
                padding="normal"
                >confirm </Button> 
                
                </Box>       


    
    
            
         <div> 
       

                  
       </div>
    
       </form>

       </div>

)
   


  }
  export default  Discount;






