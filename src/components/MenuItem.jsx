import Link from 'next/link'
import React from 'react'


export default function MenuItem({title,address,Icon}) {
  return (
    <Link href={address}>
        <Icon/>
        <p className='uppercase hidden sm:inline'>{title}</p>
    </Link>

  )
}
