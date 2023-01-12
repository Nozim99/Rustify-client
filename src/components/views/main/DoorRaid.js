import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faBars, faUsers } from '@fortawesome/free-solid-svg-icons'
import "../../styles/doorRaid.css"

export default function DoorRaid() {
  return (
    <div className='door_raid'>
      <div className="door_raid_btn_box">
        <button className='door_raid_btn'>Create a Group</button>
      </div>
      <div className='door_raid_groups'>
        <div className='door_raid_group'>
          <div>1-group</div>
          <div>4 <FontAwesomeIcon icon={faUsers} /></div>
          <div>11.11.2023</div>
          <div>90%</div>
          <div><FontAwesomeIcon icon={faBars} /></div>
        </div>
      </div>

      <div className='door_raid_groups'>
        <div className='door_raid_group'>
          <div>1-group</div>
          <div>4 <FontAwesomeIcon icon={faUsers} /></div>
          <div>11.11.2023</div>
          <div>90%</div>
          <div><FontAwesomeIcon icon={faBars} /></div>
        </div>
      </div>
    </div>
  )
}
