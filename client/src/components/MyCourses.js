import react, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './courseDisplay.css'

function ViewMyCourses() {
const [courses,setCourses] = useState([])

const id = window.location.href.split('/').at(4);
 

useEffect(()=>{
    axios
    .get('http://localhost:9000/instructor/viewCoursestitleI/'+id)
    .then( res => {
        console.log(res)
        console.log('pp');
        setCourses(res.data)
    })
    .catch(err=>{console.log(err)})
},[])


const insertStars = (ratin, idx)=>{
    let htmlRating = '<div>'
   
        for (let j = 0; j < ratin; j++) {
          htmlRating+=  '<span class="fa fa-star checked"></span> '
        }
        for (let k = ratin; k < 5; k++) {
          htmlRating+='<span class="fa fa-star-o"></span> '
        }
   
      
    htmlRating += '</div>'
    // console.log(ratin);
    // console.log(idx);
    if(!document.getElementById(idx)){return}
    document.getElementById(idx).innerHTML = htmlRating
  }
  
  const thumbnail=(link)=>{
  // console.log(link.split("=").at(1));
  return 'https://img.youtube.com/vi/'+id
  }

//<Link to={{pathname:course._id}}><h2>{course.title}</h2></Link><


return(

    <div class="courseDisplay">
        <h1 style={{"text-align": "center","color": "white", "margin":"50px"}}>View My courses</h1>
    <div class="allganb" style={{display: "flex","justify-content": "space-between", "overflow": "auto"
  }}>        
        {courses.map((course) => (
                 <div class="ganb" >
                   
                <h2 className="create" align="center"><Link to={{pathname:course._id}}><img style={{borderRadius:'10px', width:'400px'}} src={thumbnail(course.previewVideo)} alt="Course"></img><h1>{course.title}</h1></Link></h2>
                <div id={courses.indexOf(course)+'c'} style={{fontSize:'20px'}}>
                <h2 align="center" >{insertStars(course.rating, courses.indexOf(course)+'c')}</h2>
                </div>               
                <h2 align="center">Total Hours: {course.totalHours}</h2>
                
                
                {/* <div id="area" style={{textAlign:'left', padding:'40px', lineHeight:'30px'}}>jj{insertStars(course.rating)}</div> */}
                <h2 align="center">Registered Trainees: {course.registeredTrainees}</h2>
                
                </div>
  
            ))}
    </div>
    </div>
)
}

export default ViewMyCourses 

