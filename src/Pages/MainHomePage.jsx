import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHomePage = () => {
  return (
    <>
      <div className="d-flex bd-highlight">
        <div className="flex-shrink-1 p-3 bd-highlight" style={{backgroundColor:'#6c7175'}}>
          <div className='d-flex flex-column'>
          <FontAwesomeIcon icon={faHouse} className='py-3 px-1' style={{color:'black'}}/>
          <FontAwesomeIcon icon={faBars} className='py-3 px-1'style={{color:'black'}}/>
          <FontAwesomeIcon icon={faTeamspeak} className='py-3 px-1'style={{color:'black'}}/>
          </div>
        </div>

        <div className="w-100 bd-highlight bg-primary" style={{ height: "100vh" }} >        
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainHomePage
