import { useState } from 'react'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom'



//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
const UserSearchCourse = (props) => {
  const [search, setSearch] = useState(``);
  const [error, setError] = useState(null)
  const [courses,setCourses] = useState([])
const [subject,setSubject] = useState('')
const [rating,setRating] = useState(0)

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

  const handleSubmit2 = async (e) => {
  e.preventDefault()

  Swal.fire({
    title: 'Filters',
    html:
    '<div>'+
    '<h3> Filter My Courses By Rating and Subject </h3>'+
''+
    '<form className="filter" '+
''+
    '  <label>Subject</label>'+
    '  <input '+
    '    id="swal-input2"'+
    '    type="text" '+
    '    '+
    '    '+
    '  />'+
    '<br/>   '+
    '   <label>Rating</label>'+
    '  <input '+
    '    id="swal-input1"'+
    '    type="Number" '+
    '    value=0'+
    '  />'+
    '   '+
''+
    '</form>'+
'</div>',
    confirmButtonColor: '#38a53e',
    confirmButtonText: 'Search',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    },
    showCancelButton:true,
  }).then(async(result) => {
    if (result.isConfirmed) {
      console.log(document.getElementById('swal-input2').value)
      console.log(document.getElementById('swal-input1').value)
      const respnse= await fetch('http://localhost:9000/instructor/filterCoursesByRatingAndSubject?subjectAndRating='+document.getElementById('swal-input2').value+','+document.getElementById('swal-input1').value, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const json= await respnse.json()
    
    if(!respnse.ok){
        console.log(json.error)
    }
    if(respnse.ok){
       console.log(json)
        setCourses(json)
         
        }
        setSubject('')
        setRating(0)
    }
    
  })

  }
  const handleSubmit3 = async (e) => {
  e.preventDefault()

  Swal.fire({
    title: "Filters Ranges",
    html:
'    <div>'+
'    <h3> Filter All Courses By Price </h3>'+
''+
'    <form className="filter"  '+
'      <h3>Filter Ranges</h3>'+
''+
'      <label>Lower bound</label>'+
'      <input '+
'    id="swal-input3"'+
'        type="number" '+
'        value=0'+
'        required'+
'      />'+
'        <br/>'+
'      <label>Upper Bound</label>'+
'      <input '+
'    id="swal-input4"'+
'        type="number" '+
'        value=50000'+
'      required/>'+
'        <br/>'+
''+
''+
'    </form>'+
''+
''+
''+
''+
''+
'        '+
'    </div>',
    confirmButtonColor: '#38a53e',
    confirmButtonText: 'Search',
    preConfirm: () => {
      return [
        document.getElementById('swal-input3').value,
        document.getElementById('swal-input4').value
      ]
    },
    showCancelButton:true,
  }).then(async(result) => {
    if (result.isConfirmed) {
      let min = document.getElementById('swal-input3').value/rate
      let max = document.getElementById('swal-input4').value/rate
      const respnse= await fetch('http://localhost:9000/course/filterCoursesByPrice?price='+min+','+max, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const json= await respnse.json()
    
    if(!respnse.ok){
        console.log(json.error)
    }
    if(respnse.ok){
       console.log(json)
        setCourses(json)
         
        }
        setSubject('')
        setRating(0)
    }
    
  })

  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const id = window.location.href.split('/').at(5);//course
    console.log(id)
    console.log(search)


    const response= await fetch('http://localhost:9000/course/search/'+search, {
        method: 'GET'
    })
      
  
    const json= await response.json()


    if(!response.ok){
        setError(json.error)

        
    }
    if(response.ok){
        
        setCourses(json)
        

        console.log("Your Search is here")
        console.log(json)

        // Swal.fire({
        //     title: 'Your Search is here!',
        //     icon: 'success',
        //     confirmButtonColor: '#38a53e',
        //     confirmButtonText: 'OK'
        //   })
        setError(null)
        setSearch('')
        

    } 
}
if(window.location.href.split('/').at(3)=='userCorporate'){
  return (
    <div style={{ "text-align" : 'center' }}>
    <form className="search" onSubmit={handleSubmit}> 
    <br/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


    <label>Search in All Courses:</label>
    <input
    style={{"marginTop":"13px","background-color": "white","marginLeft":"13px",
               "border": "none", "color": "black", "padding": "12px", "cursor": "pointer", "font-size": "17px",  "border-radius":"5px"}}
      type='text'
      onChange={e => setSearch(e.target.value)}
      placeholder='Search...'
      value={search}
      required

    />
  <button type="submit" style={{"marginTop":"13px","marginRight":"13px","marginLeft":"13px","background-color": "#1976d2","paddingBottom":"8px","paddingTop":"8px",
               "border": "none", "color": "white",  "cursor": "pointer", "font-size": "20px",  "border-radius":"5px"}}><i class="fa fa-search"></i></button>
  <button style={{"marginTop":"13px","marginRight":"13px","background-color": "#1976d2","paddingBottom":"8px","paddingTop":"8px",
               "border": "none", "color": "white",  "cursor": "pointer", "font-size": "20px",  "border-radius":"5px"}} onClick={handleSubmit2} type="submit"><i class="fa fa-filter"></i></button>
        {error && <div className="error">{error}</div>}
    </form>
      <div style={{ "text-align" : 'left' }}>

      <ul>
      {courses.map(course => <li key={course._id}><Link to={{pathname:course._id}}><h3 style={{display:"inline",margin:"10px"}}>{course.title}</h3></Link> Total Hours: {course.totalHours} Rating: {course.rating}</li>)}
      </ul>
      </div>

    </div>
  )
}

  return (
    <div style={{ "text-align" : 'center' }}>
    <form className="search" onSubmit={handleSubmit}> 
    <br/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


    <label>Search in All Courses:</label>
    <input
    style={{"marginTop":"13px","background-color": "white","marginLeft":"13px",
               "border": "none", "color": "black", "padding": "12px", "cursor": "pointer", "font-size": "17px",  "border-radius":"5px"}}
      type='text'
      onChange={e => setSearch(e.target.value)}
      placeholder='Search...'
      value={search}
      required

    />
  <button type="submit" style={{"marginTop":"13px","marginRight":"13px","marginLeft":"13px","background-color": "#1976d2","paddingBottom":"8px","paddingTop":"8px",
               "border": "none", "color": "white",  "cursor": "pointer", "font-size": "20px",  "border-radius":"5px"}}><i class="fa fa-search"></i></button>
  <button style={{"marginTop":"13px","marginRight":"13px","background-color": "#1976d2","paddingBottom":"8px","paddingTop":"8px",
               "border": "none", "color": "white",  "cursor": "pointer", "font-size": "20px",  "border-radius":"5px"}} onClick={handleSubmit2} type="submit"><i class="fa fa-filter"></i></button>
  <button style={{"marginTop":"13px","background-color": "#1976d2","paddingBottom":"8px","paddingTop":"8px","paddingLeft":"10px","paddingRight":"10px",
               "border": "none", "color": "white",  "cursor": "pointer", "font-size": "20px",  "border-radius":"5px"}} onClick={handleSubmit3} type="submit"> $ </button>
      {error && <div className="error">{error}</div>}
    </form>
      <div style={{ "text-align" : 'left' }}>

      <ul>
      {courses.map(course => <li key={course._id}><Link to={{pathname:course._id}}><h3 style={{display:"inline",margin:"10px"}}>{course.title}</h3></Link> Price: {(Math.round((course.price-(course.price*course.promotion/100)) * rate) + ' ' + currency)} Total Hours: {course.totalHours} Rating: {course.rating}</li>)}
      </ul>
      </div>

    </div>
  )}

  export default UserSearchCourse 
