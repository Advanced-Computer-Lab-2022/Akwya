import react, {useState, useEffect} from 'react'



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
import { Link } from "react-router-dom";




//






const Discount = (props) => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
       
    //   function Courses(props) {
      const [courses,setCourses] = useState([])
      
      
      
      useEffect(()=>{
          axios
          .get('http://localhost:9000/course/')
          .then( res => {
              console.log(res)
              setCourses(res.data)
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
        // }





    const [admin,setAdmin] = useState('');
    const [price,setPrice]=useState(0);
    const [promotion, setPromotion]=useState(0);

    const[promotionStart,setPromotionStart]=useState('');

    const [promotionExpiry, setPromotionExpiry]=useState('');
    


const id=window.location.href.split('/').at(4);
   
   const ifPromotionFound =async (courseId) =>{
    await axios.get(`http://localhost:9000/admin/promotionFound/`+courseId).then(
        (res) => {   
            console.log(courseId)
            console.log("BBB")
            console.log(res)
            const promotionF=res.data['promotion']
                console.log(promotionF)
                if(promotionF!==0){
                    console.log("already existing")
                    Swal.fire({
                        title: 'Promotion already exists!',
                        icon: 'error',
                        confirmButtonColor: '#990000',
                        confirmButtonText: 'OK'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          window.location.reload();
                        }
                      })


                }
                else {
                  checkDates(courseId);

              
                }
   })

   }



const checkDates = (courseId) => {


  const month=promotionExpiry.split('-').at(1)
  const year=promotionExpiry.split('-').at(0)
  const day =promotionExpiry.split('-').at(2)
  const today=new Date()

  // console.log(year)
  // console.log(parseInt(year))
  // console.log(month)
  // console.log(today.getFullYear());
  //|| parseInt(month) <(today.getMonth() + 1)){

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
        adminDiscount(courseId);
      }
    } else {
      //month akbr
      adminDiscount(courseId);
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
  adminDiscount(courseId);
}
    




}


    const adminDiscount =  async (courseId) => {
        await axios.get(`http://localhost:9000/admin/courseDiscountAdmin/`+ courseId+'?promotion='+promotion).then(
            (res) => {   
                console.log(res)
                // setPromotion(res.data['promotion'])
                console.log(promotion);

                console.log("AAA")
                //
                console.log(res.data['price'])
                date(courseId);
                date2(courseId)


               
       
              
   
               const newPrice=res.data['price']-(res.data['price']*(promotion/100))
               console.log(newPrice)
               
            //    setPrice(newPrice)
            //    console.log(newPrice)

            }
            );
            
        }


    //'?promotionStart='+promotionStart+

    const date2 =  async (courseId) => {
      //promotionStart
      await axios.get(`http://localhost:9000/admin/courseDiscountAdmin/`+courseId +'?promotionStart='+promotionStart).then(
     (res) => { 


      setPromotionStart(res.data['promotionStart'])
      
      const promotionStart = res.data['promotionStart']
      console.log(promotionStart)
      
       
          

     }
      );
  }

   



        const date =  async (courseId) => {
            //promotionStart
            await axios.get(`http://localhost:9000/admin/courseDiscountAdmin/`+courseId +'?promotionExpiry='+ promotionExpiry ).then(
           (res) => { 

        
          
            console.log("EXPIRYYY")
          
            console.log(promotionExpiry)
            setPromotionExpiry(res.data['promotionExpiry'])

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
  
                
      
           }
            );
        }




    
        return(

<div style={{background:"#f1f1f1",padding:"40px",borderRadius:"10px"}}>

          <div className="Dicount">
        
          <form >
    
    
          <h1 align="center">Add Discount</h1>
            

    
            <div class="admin2">
          <form className="create" >
          <div class="txt_field">    

          <input 
            type="number" 
            min = "0"
            max = "100"
            onChange={(e) => setPromotion(e.target.value)} 
            value={promotion}
            required

          /><label>Enter Discount Percentage: </label>
            </div>
            

          



           <label> Discount starting from: </label>    
    
                    <input 
            type="date"
            required 
            id="xx"
            placeholder='01/01/2023'
            onChange={(e) =>setPromotionStart(e.target.value)} 
            value={promotionStart}
          />

            <br>
            </br>
       
      

    
           <label> Discount valid till: </label>    
    
                    <input 
            type="date"
            required 
            id="xx"
            placeholder='01/01/2023'
            onChange={(e) =>setPromotionExpiry(e.target.value)} 
            value={promotionExpiry}
          />

         
        
           </form>
    
           </div>
        
        

            


                
           
           </form>
    
           </div>
        
            <div>
            <div>


        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Send Promotion</StyledTableCell>
          


          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow style={{boxShadow:"100px 20px 1000px purple" ,backgroundColor:'white',borderWidth:'10px',borderColor:'white' , '':'white', borderRadius: '20px', padding: '20px'}}
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
           
              >
              <TableCell align="center"><h2>{course.title}</h2></TableCell>
              <TableCell align="center">{(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)}</TableCell>
              <TableCell align="center"><Box sx={{marginBottom: 2,marginLeft: 2 ,display:"inline"}}>
                        <Button variant="contained"
                    
                    onClick={()=>ifPromotionFound(course._id)}
                        margin="normal"
                        padding="normal"
                        >confirm </Button> 
                        
                        </Box>     </TableCell>
              {/* <TableCell align="center">{course.totalHours}</TableCell>
              <TableCell align="center">{course.rating}</TableCell> */}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>





            </div>





            
            <div>
           


               </div>
               </div>
               </div>
        )
           
             
    
    }
    export default Discount;
