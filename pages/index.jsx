import Image from 'next/image'
import { Inter } from 'next/font/google'

import {Navbar} from '../components/dashboardLayout/navbar'
import { UserContext } from "../src/context/index";
import { useContext ,useState } from "react";
import { fetchWord } from '@/src/lib/lang/fetchWord'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

 const { logoutHandler ,lang } = useContext(UserContext)

  return (
    <main
    id="main_page"
    dir={''}
      className={`main_page flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
sssss
      {fetchWord('home_address', lang)}

<Navbar/>



   </div>

    </main>
  )
}
