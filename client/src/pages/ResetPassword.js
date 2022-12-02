import { Link } from 'react-router-dom'
import ResetMail from '../components/Instructor/ResetMail.js'


const Reset = () => {

    return (
      <div className="Reset">
        <h2>Reset Password with mail</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        <ResetMail/>
       
      </div>
    )
  }
  
  export default Reset