import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
const MainLayout = () => {
    return (
        <div>
          <Header />
          <div className='section__home__toothhive'>
            <div className='section__home__toothhive__1'>
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      )
}

export default MainLayout