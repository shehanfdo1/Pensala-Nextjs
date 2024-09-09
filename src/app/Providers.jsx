import { ThemeProvider } from 'next-themes'
import React, { Children } from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
    <div className='text-gray-700 dark:text-gray-200 dark:bg-slate-900
    min-h-screen select-none transition-colors duration-600'>
        {children}
    </div>
    </ThemeProvider>
  )
}
