
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


    const params = new URLSearchParams(window.location.search);
    
    const courseId = window.location.href.split('/').at(4);

    console.log(courseId)
    

    

    const [instructors,setInstructors] = useState([]);
    const [ promotion,setPromotion] = useState(0);
    const [price ,setPrice]=useState(0);
   
    const [promotionExpiry,setPromotionExpiry] = useState('');
    //promotionExpiry
    //+'?promotionExpiry=' +promotionExpiry 
    


    const edit =  async () => {
        await axios.get(`http://localhost:9000/course/courseDiscount/`+courseId +'?promotion='+ promotion ).then(
       (res) => { 
           
            console.log(courseId)
            
            console.log(res.data['price'])
            setPrice(res.data['price'])
            
            console.log(promotion)
           

            const newPrice=res.data['price']-(res.data['price']*(promotion/100))
            
            setPrice(newPrice)
            console.log(newPrice)
            
            if(promotion!=0){
              console.log("calling date")
              date()
            }
         
       }
        );
     

    }

    const date =  async () => {
      await axios.get(`http://localhost:9000/course/courseDiscount/`+courseId +'?promotionExpiry='+ promotionExpiry ).then(
     (res) => { 

      setPromotionExpiry(res.data['promotionExpiry'])
      // const promotionExpiry = res.data['promotionExpiry']
      console.log(promotionExpiry)
      
       
          

     }
      );
   

  }






return(


    <div className="Dicount">


<label>Enter Discount Percentage:</label>
      <input 
        type="text" 
        id="bio"
        onChange={(e) => setPromotion(e.target.value)} 
        value={promotion}
        required
      />
        
        

       <label>Discount valid till:</label>    

                <input 
        type="text" 
        id="xx"
        onChange={(e) =>setPromotionExpiry(e.target.value)} 
        value={promotionExpiry}
        required
      />
        
        
                <Box sx={{marginBottom: 2}}>
                <Button variant="contained"
                onClick={edit}
                margin="normal"
                padding="normal"
                >confirm </Button> 
                
                </Box>       


    
    
            
         <div> 
       

                  
       </div>
       {promotionExpiry}


       </div>

)
   


  }
  export default  Discount;






