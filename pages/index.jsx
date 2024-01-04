import Image from 'next/image'
import { Inter } from 'next/font/google'

import {Navbar} from '../components/dashboardLayout/navbar'
 import { UserContext } from '@/src/context';
import { useContext ,useState } from "react";
import { fetchWord } from '@/src/lib/lang/fetchWord'
import ClientLayout from '@/components/clientLayout/index'



import Link from 'next/link'
import { useRouter } from 'next/router'
import LangSwitcher from '@/components/clientLayout/langSwitcher'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  const { locale, asPath } = useRouter()

  console.log("locale" ,locale)
  const {dir} = useContext(UserContext)

  return (
    <ClientLayout>

  
    <main
    dir={dir}
    id="main_page"
    
      className={`main_page flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

<LangSwitcher/>

{locale}


<Navbar/>



   </div>

    </main>
    </ClientLayout>
  )
}
