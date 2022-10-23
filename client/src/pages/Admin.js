import { Link } from 'react-router-dom'
import AddAdminForm from '../components/AddAdminForm'


const Admin = () => {

    return (
      <div className="admin">
        <h2>Admin Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        <AddAdminForm />
      </div>
    )
  }
  
  export default Admin