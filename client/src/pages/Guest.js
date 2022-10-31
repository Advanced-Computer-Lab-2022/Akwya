import { Link } from 'react-router-dom'
import DisplayCourses from '../components/DisplayCourses'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'

const User = () => {

    return (
      <div className="guest">
        <h2>Guest Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        <UserSearchCourse/>

        
        <DisplayCourses/>
         
      </div>
    )
  }
  
  export default User