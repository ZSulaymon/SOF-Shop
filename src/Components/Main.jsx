import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

export default function Main({currentItems}) {
  return (
    <main>
        <Header totalItems={currentItems}/>
        <Outlet />
        <Footer />
    </main>
  )
}
