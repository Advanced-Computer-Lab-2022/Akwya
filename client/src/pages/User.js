import { Link } from 'react-router-dom'
import DisplayCourses from '../components/DisplayCourses'
const User = () => {

    return (
      <div className="user">
        <h2>User Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>

        <DisplayCourses/>
         
      </div>
    )
  }
  
  export default User