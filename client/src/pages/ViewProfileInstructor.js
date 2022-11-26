import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

import DataFetching from '../DataFetching'
import  ViewEmail from '../components/Instructor/ViewEmail.js'
import  EditEmail from '../components/Instructor/EditEmail.js'

const ViewProfileInstructor = (props) => {

    return (
      <div className="view profile">
        <h2>MY PROFILE</h2>

        <Link to="/instructor/6380fada0e91fe67a1baf48a">
          <h2>Go to instructor</h2>
        </Link>

        <ViewEmail/>
        <EditEmail/>
       
        
        
         
      </div>
    )
  }
  
  export default ViewProfileInstructor;