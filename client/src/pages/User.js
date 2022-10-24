import { Link } from 'react-router-dom'

const User = () => {

    return (
      <div className="user">
        <h2>User Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
      </div>
    )
  }
  
  export default User