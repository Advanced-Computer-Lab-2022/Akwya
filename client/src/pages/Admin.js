import { Link } from 'react-router-dom'
import AddAdminForm from '../components/AddAdminForm'
import AddTraineeForm from '../components/AddCorporateTrainee'
import AddInstructorForm from '../components/AddInstructorForm'


const Admin = () => {

    return (
      <div className="admin">
        <h2>Admin Page</h2>
        <Link to="/">
          <h2>Go to Home Page</h2>
        </Link>
        <AddAdminForm />
        <AddInstructorForm />
        <AddTraineeForm />
      </div>
    )
  }
  
  export default Admin