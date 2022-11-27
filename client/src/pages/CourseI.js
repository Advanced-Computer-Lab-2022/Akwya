import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'
import MyCourseI from '../components/Instructor/GetASingleCourse'
import AddVideo from '../components/Instructor/AddVideo'
import ViewVideos from '../components/Instructor/ViewVideos'
import ViewCourseRating from '../components/Instructor/ViewCourseRating'

const Course = (props) => {

    return (
      <div className="guest">
        <h2>Course Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>

        <MyCourseI country={props.country}/>
        <AddVideo/>
        <ViewVideos/>

        <ViewCourseRating/>

         
      </div>
    )
  }
  
  export default Course