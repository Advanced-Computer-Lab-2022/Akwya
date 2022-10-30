import { useState } from 'react'
import Swal from "sweetalert2";


//create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
const SearchACourse = () => {
    console.log("here")

  const [search, setSearch] = useState(``);
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()


    // const searchh = {search}
    // body: JSON.stringify(course) ,

    
    const id = window.location.href.split('/').at(4);
    console.log(id)
        const respnse= await fetch('localhost:9000/instructor/search/635c4eadbfebce1319c0b708/omar', {
        method: 'GET'//,
        // headers: {
        //     'Content-Type' : 'application/json'
        // }
    })
      
  
    const json= await respnse.json()

    if(!respnse.ok){
        setError(json.error)
    }
    if(respnse.ok){
        console.log("Your Search is here")

        Swal.fire({
            title: 'Your Search is here!',
            icon: 'success',
            confirmButtonColor: '#38a53e',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })  
        setError(null)
        setSearch('')
        

    } 
}


  return (
    <form className="searchhh" onSubmit={handleSubmit}> 

    <label>Search in my Courses:</label>
    <input
      type='text'
      className='search'
      onChange={e => setSearch(e.target.value)}
      placeholder='Search...'
    />
    <button>Search</button>
      {error && <div className="error">{error}</div>}
    </form>
)
}

export default SearchACourse