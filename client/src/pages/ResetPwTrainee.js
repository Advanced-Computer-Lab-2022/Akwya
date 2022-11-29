import { Link } from 'react-router-dom'
import ResetMail from '../components/Trainee/ResetPw.js'


const Resett = () => {

    return (
      <div className="Resett">
        <h2>Reset Password with mail</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        <ResetMail/>
       
      </div>
    )
  }
  
  export default Resett