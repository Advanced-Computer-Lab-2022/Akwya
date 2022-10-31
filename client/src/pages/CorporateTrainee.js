import { Link } from 'react-router-dom'
import DisplayCourses from '../components/DisplayCourses'
import FilterByRatingAndSubject from '../components/Instructor/FilterByRatingAndSubject'
import UserSearchCourse from '../components/user/UserSearchCourse'

const User = () => {

    return (
      <div className="corporateTrainee">
        <h2>User Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>

        <UserSearchCourse/>

        <DisplayCourses/>
        <FilterByRatingAndSubject/>
         
      </div>
    )
  }
  
  export default User