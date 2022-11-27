import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import UserSearchCourse from '../components/user/UserSearchCourse'
import MyCourse from '../components/user/GetASingleCourse'
import UserViewVideos from '../components/user/UserViewVideos'

const Course = (props) => {

    return (
      <div className="guest">
        <h2>Course Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>

        <MyCourse country={props.country}/>
        <UserViewVideos/>

        

         
      </div>
    )
  }
  
  export default Course