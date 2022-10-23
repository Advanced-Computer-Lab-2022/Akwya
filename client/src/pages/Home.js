import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="home">
      <h2>Home</h2>
      <Link to="/admin">
          <h2>Go to Admin Page</h2>
        </Link>
      <Link to="/user">
          <h2>Go to User Page</h2>
        </Link>
    </div>
    
  )
}

export default Home