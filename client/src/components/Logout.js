import axios from "axios";

const logout =  async () => {
    await axios.get(`http://localhost:9000/trainee/logout/`).then(
        (res) => {    
           window.location = '/guest/0'
        }
         );
       
  }
  export default logout