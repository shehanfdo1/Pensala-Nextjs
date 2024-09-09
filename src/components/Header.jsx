import React from 'react'
import MenuItem from './MenuItem';
import { PiPencilCircleFill } from "react-icons/pi";
import { RiDashboard3Line } from "react-icons/ri";


export default function Header() {
  return (
    <div>
        <div className=''>
            <MenuItem title="Home" address="/home" Icon={PiPencilCircleFill}/>
            <MenuItem title="Dashboard" address="/dashboard" Icon={RiDashboard3Line}/>


        </div>
        <div className=''>

        </div>
    </div>
  )
}
