import { Link } from 'react-router-dom'
import AddAdmin from '../components/Admin/AddAdmin'
import AddTrainee from '../components/Admin/AddCorporateTrainee'
import AddInstructor from '../components/Admin/AddInstructor'
import Refund from '../components/Admin/RefundTrainee'
import React, { useState, useEffect } from 'react';  


const Admin = () => {
  useEffect(()=>{
    document.getElementById('logoutbutton').hidden = false
    })
    return (
      <div className="admin">
        <h2>Admin Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        <AddAdmin />
        <AddInstructor />
        <AddTrainee />

        <Link to="/AdminPromotion">
          
          <h3>Set promotions</h3>
        </Link>
       

       <Refund/>

      </div>
    )
  }
  
  export default Admin