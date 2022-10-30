import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="home">
      <h2>Home</h2>
      <Link to="/admin">
          <h2>Go to Admin Page</h2>
        </Link>
        <Link to="/user">
          <h2>Go to Individual Trainee Page</h2>
        </Link>
        <Link to="/userCorporate">
          <h2>Go to Corporate Trainee Page</h2>
        </Link>
      <Link to="/instructor/635c4eadbfebce1319c0b708">
          <h2>Go to Instructor Page</h2>
        </Link>
    </div>
    
    
  )
}

export default Home