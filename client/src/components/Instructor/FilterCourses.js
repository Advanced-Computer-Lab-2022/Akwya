import { useState, useEffect } from 'react'
//import Swal from "sweetalert2";
import axios from 'axios'
import * as React from 'react';

const FilterCourse = () => {

    const [courses, setCourses] = useState([])
    const [option, setOption] = useState('')
    const [error, setError] = useState(null)
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
      setOpen(!open);
    };

    const HandleFilter = async (e) => {
        e.preventDefault()
        useEffect(() => {
            axios
                .get('http://localhost:9000/course/filterCoursesOnSubjAndRating/:id/:title')
                .then(res => {
                    console.log(res)
                    setCourses(res.data)
                })
                .catch(err => { console.log(err) })
        }, [])

    }

    return (
        <form className="filter" onSubmit={HandleFilter}>
            <h3>Filter courses </h3>


            <br/>

            <input
                type="text"
                onChange={(e) => setOption(e.target.value)}
                value={option}
                required/>
            <br/>
            {/* {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Menu 1</button>
          </li>
          <li className="menu-item">
            <button>Menu 2</button>
          </li>
        </ul>
      ) : null} */}

            <button> Filter </button>
            {
                courses.map(course => <li key={course.id} > Title: {course.title} Price: {course.price} Total Hours: {course.totalHours} Rating: {course.rating} </li>)}

                    {error && <div className="error" > {error} </div>}
                </form>
                )
            }

            export default FilterCourse