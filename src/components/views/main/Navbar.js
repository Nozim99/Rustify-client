import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faBell } from '@fortawesome/free-solid-svg-icons'
import "../../styles/navbar.css"
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav>
      <h1 onClick={()=>navigate("/")}>RUSTIFY</h1>
      <div className="nav_right">
        <button>Signup</button>
        <div className="nav_notification">
          <div className='nav_notification_red'></div>
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className='nav_menu_icon'>
          <FontAwesomeIcon icon={faBars} />
          <div className='nav_menu_modal_box'>
            <div className='nav_menu_modal'>
              <FontAwesomeIcon className='nav_menu_modal_Xmark' icon={faXmark} />
              <div>Friends</div>
              <div>Player</div>
              <div>Settings</div>
              <div>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
