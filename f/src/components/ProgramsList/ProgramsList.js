import React from 'react'
import './ProgramsList.css'
import { Link } from 'react-router-dom';
function ProgramsList ({props}) {
    // const [ projects, setProjects ] = useState([])

  // useEffect(() => {

  //   fetch("http://localhost:8080/ ")
  //   .then((res) => res.json())
  //   .then((data) => setProjects(data))
  //   .catch((err) => console.error(err))

  // }, [])
  
  return (
      <div className='project-display-container'>
        <img className='program-display-background' alt='skyscraper background' src="https://plus.unsplash.com/premium_photo-1678990345549-6a35a77883d5?auto=format&fit=crop&q=80&w=1032&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <ul className='program-list'>
          <li className='nav-item'>
              <Link to='/project-value' className='nav-links'>
                  Project value form
              </Link>
          </li>
        </ul>
      </div>

  )
}

export default ProgramsList