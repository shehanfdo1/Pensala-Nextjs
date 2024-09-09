'use client'

import React from 'react'
import { BsLaptop ,BsFillLaptopFill } from "react-icons/bs";
import { useTheme } from 'next-themes';

export default function Darkmode() {
    const {theme,setTheme,systemTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
return (
    <div>
        {currentTheme === 'dark' ? (
            <BsLaptop 
            onClick={()=> setTheme('light')}
            className='text-xl cursor-pointer hover:text-indigo-700'
            />
        ) :(
            <BsFillLaptopFill
            onClick={()=> setTheme('dark')}
            className='text-xl cursor-pointer hover:text-indigo-700'
            />
        )}
    </div>
  )
}
