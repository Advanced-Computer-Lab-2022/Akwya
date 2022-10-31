import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'

const User = (props) => {

    return (
      <div className="guest">
        <h2>Guest Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        <UserSearchCourse/>

        
        <DataFetching country={props.country}/>
         
      </div>
    )
  }
  
  export default User