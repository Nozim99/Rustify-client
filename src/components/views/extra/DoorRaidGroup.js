import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUsers } from '@fortawesome/free-solid-svg-icons'
import "../../styles/doorRaid.css"

export default function DoorRaidGroup() {
  return (
    <div className='door_raid'>
      <div className="door_raid_header">
        <h1>1-gourp</h1>
        <button className='door_raid_btn door_raid_group_btn'>add player</button>
        <button className='door_raid_group_delete_btn door_raid_group_btn'>Delete</button>
      </div>

      <div className='door_raid_groups'>
        <div className='door_raid_group door_raid_groups_menu'>
          <div>name</div>
          <div>code</div>
          <div>status</div>
          <div>offer</div>
          <div>date</div>
          <div></div>
        </div>
      </div>

      <div className='door_raid_groups'>
        <div className='door_raid_group'>
          <div>Nozimbek</div>
          <div>37</div>
          <div>online</div>
          <div>mezes</div>
          <div>11.01.2023</div>
          <div><FontAwesomeIcon icon={faBars} /></div>
        </div>
      </div>

      <div className='door_raid_groups'>
        <div className='door_raid_group'>
          <div>Nozimbek</div>
          <div>37</div>
          <div>online</div>
          <div>mezes</div>
          <div>11.01.2023</div>
          <div><FontAwesomeIcon icon={faBars} /></div>
        </div>
      </div>

    </div>
  )
}
