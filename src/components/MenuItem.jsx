import Link from 'next/link'
import React from 'react'


export default function MenuItem({title,address,Icon}) {
  return (
    <Link href={address} className='hover:text-indigo-700'>
        <Icon className='text-4xl sm:hidden'/>
        <p className='uppercase hidden sm:inline'>{title}</p>
    </Link>

  )
}
