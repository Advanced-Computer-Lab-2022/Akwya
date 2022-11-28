import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import FilterFetching from '../components/user/FilterFetching'

import UserSearchCourse from '../components/user/UserSearchCourse'
import ChangePw from '../components/Trainee/ChangePw'
import FilterByRatingAndSubject from '../components/Instructor/FilterByRatingAndSubject'

const User = (props) => {

    return (
      <div className="user">
        <h2>User Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        <ChangePw/>

        <UserSearchCourse/>
        
        <DataFetching country={props.country}/>
        <FilterFetching country={props.country}/>
        <FilterByRatingAndSubject country={props.country}/>
         
      </div>
    )
  }
  
  export default User