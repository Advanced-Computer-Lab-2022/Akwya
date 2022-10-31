import { Link } from 'react-router-dom'
import DataFetching from '../components/DataFetching.js'
import UserSearchCourse from '../components/user/UserSearchCourse.js'

const User = () => {

    return (
      <div className="guest">
        <h2>Guest Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        <UserSearchCourse/>

        
        <DataFetching/>
         
      </div>
    )
  }
  
  export default User