import { Link } from 'react-router-dom'
import DataFetching from '../DataFetching'
import FilterFetching from '../components/user/FilterFetching'

import UserSearchCourse from '../components/user/UserSearchCourse'

import FilterByRatingAndSubject from '../components/Instructor/FilterByRatingAndSubject'

const User = () => {

    return (
      <div className="user">
        <h2>User Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>

        <UserSearchCourse/>
        
        <DataFetching/>
        <FilterFetching/>
        <FilterByRatingAndSubject/>
         
      </div>
    )
  }
  
  export default User