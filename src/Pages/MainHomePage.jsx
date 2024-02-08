import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const MainHomePage = () => {

  return (
    <>
      <Navbar />
      <div className="d-flex bd-highlight">
        <div className="flex-shrink-1 p-3 bd-highlight main_home_bg" >
          <div className='d-flex flex-column'>
            <FontAwesomeIcon icon={faHouse} className='py-3 px-1 main_home_icon' />
            <FontAwesomeIcon icon={faBars} className='py-3 px-1 main_home_icon' />
            <FontAwesomeIcon icon={faTeamspeak} className='py-3 px-1 main_home_icon' />
          </div>
        </div>

        <div className="w-100 bd-highlight bg-primary main_home_outlet">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainHomePage
