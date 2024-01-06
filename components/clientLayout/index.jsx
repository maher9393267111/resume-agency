import React from 'react'
import { LangContextProvider } from '@/src/context/langContext';
import Navbar from './navbar'
import Footer from './footer'
export default function ClientLayout({ children }) {
  return (


    <div>
<Navbar/>


      {children}


    </div>





  )
}
