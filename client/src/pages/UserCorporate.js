import { Link } from 'react-router-dom'
import DisplayCourses from '../components/DisplayCourses'
import FilterByRatingAndSubject from '../components/Instructor/FilterByRatingAndSubject'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'
import SearchCourseCorporate from '../components/user/SearchCourseCorporate'

const User = () => {

    return (
      <div className="user">
        <h2>User Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>

        <SearchCourseCorporate/>

        <DisplayCourses/>
        <FilterByRatingAndSubject/>
         
      </div>
    )
  }
  
  export default User