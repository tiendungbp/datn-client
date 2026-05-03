import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import ChatbotWidget from '../component/Chatbot/ChatbotWidget'
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
          <ChatbotWidget />
        </div>
      )
}

export default MainLayout