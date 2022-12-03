import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="home">
      <h2>Home</h2>
      <Link to="/admin">
          <h2>Go to Admin Page</h2>
        </Link>
        <Link to="/user/63868a41143ffa7252ea011e">
          <h2>Go to Individual Trainee Page</h2>
        </Link>
        <Link to="/userCorporate/635849b7a58d8beb73e81787">
          <h2>Go to Corporate Trainee Page</h2>
        </Link>
      <Link to="/instructor/6381101753d48ea316365f94">
          <h2>Go to Instructor Page</h2>
        </Link>
        <Link to="/guest">
          <h2>Go to Guest Page</h2>
        </Link>
        <Link to="/reset">
          <h2>Go to Instructor Reset Password</h2>
        </Link>
        <Link to="/resett">
          <h2>Go to Trainee Reset Password</h2>
        </Link>
        <Link to="/Contract">
        <h2>View Instructor contract</h2>
         </Link>
    </div>
    
    
  )
}

export default Home