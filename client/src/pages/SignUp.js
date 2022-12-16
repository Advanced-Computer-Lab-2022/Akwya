import { Link } from 'react-router-dom'
import Register from '../components/SignUp'


const SignUp = () => {

    return (
      <div className="signup">
        <h2>Sign Up Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        
        </Link>
        <Register/>
      </div>
    )
  }
  
  export default SignUp