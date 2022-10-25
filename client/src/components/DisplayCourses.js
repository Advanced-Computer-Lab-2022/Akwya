


const DisplayCourses = ()=> {

    const Coursenames = ['Course 1', 'Course 2', 'Course 3']

    return (
      <div>
       Explore Courses
        <ul>
          {Coursenames.map((Coursename) => (
            <li>{Coursename}</li>
          ))}
        </ul>
      </div>
    );
}
export default DisplayCourses