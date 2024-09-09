import React from 'react'
import MenuItem from './MenuItem';
import { PiPencilCircleFill } from "react-icons/pi";
import { VscDashboard } from "react-icons/vsc";
import Link from 'next/link';


export default function Header() {
  return (
    <div className='flex justify-between items-center p-5 max-w-4xl mx-auto'>
        <div className='flex gap-4'>
            <MenuItem title="Home" address="/home" Icon={PiPencilCircleFill}/>
            <MenuItem title="Dashboard" address="/dashboard" Icon={VscDashboard}/>
        </div>
        <Link href={'/home'} className='flex items-center'>
          <span className= 'text-white font-bold bg-indigo-700 py-1 px-2 rounded-lg'>PENSALA</span>
          <span className='hidden sm:inline text-indigo-700 font-bold'>.COM</span>
        </Link>
    </div>
  )
}
