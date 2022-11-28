import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'
import MyCourseI from '../components/Instructor/GetASingleCourse'
import AddVideo from '../components/Instructor/AddVideo'
import ViewVideos from '../components/Instructor/ViewVideos'
import ViewCourseRating from '../components/Instructor/ViewCourseRating'
import Discount from '../components/Instructor/Discount'

const Course = (props) => {


const _idInstructor = window.location.href.split('/').at(4);
const _idCourse = window.location.href.split('/').at(5);


    return (
      <div className="guest">
        <h2>Course Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        <Discount/>

        <MyCourseI country={props.country}/>
        <AddVideo/>
        <ViewVideos/>

        <ViewCourseRating/>


         
      </div>
    )
  }
  
  export default Course