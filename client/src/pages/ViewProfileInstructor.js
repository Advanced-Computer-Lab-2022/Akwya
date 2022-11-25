import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

import DataFetching from '../DataFetching'
import  ViewEmail from '../components/Instructor/ViewEmail.js'
import  EditEmail from '../components/Instructor/EditEmail.js'
import  EditBio from '../components/Instructor/EditBio.js'

const ViewProfileInstructor = (props) => {

    return (
      <div className="view profile">
        <h2>MY PROFILE</h2>

        <Link to="/instructor/6381101753d48ea316365f94">
          <h2>Go to instructor</h2>
        </Link>

        <ViewEmail/>
        <EditEmail/>
        <EditBio/>
       
        
        
         
      </div>
    )
  }
  
  export default ViewProfileInstructor;