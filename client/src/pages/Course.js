import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'
import MyCourse from '../components/user/GetASingleCourse'
import ViewCourseRating from '../components/Instructor/ViewCourseRating'
import RateAndReviewCourse from '../components/user/RateAndReviewCourse'
import UserViewVideos from '../components/user/UserViewVideos'
import RateAndReviewInstructor from '../components/user/RateAndReviewInstructor'


import reportAProblem2 from '../components/Problem/reportAProblem2'

 

const Course = (props) => {

    return (
      <div className="guest">
        <h2>Course Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>


        

        <MyCourse country={props.country}/>
        <RateAndReviewCourse/>
        <RateAndReviewInstructor/>

        <UserViewVideos/>

        <button onClick={reportAProblem2}>    
        Report a problem
          </button>

        

      </div>
    )
  }
  
  export default Course