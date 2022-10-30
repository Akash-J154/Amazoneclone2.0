import React, { useContext } from 'react'
import Footer from './Footer'
import Header from './Header'
import HomeBody  from './HomeBody'
import { UseContent } from './UseContent'
const Homepage = () => {
  const {showcart}=useContext(UseContent)
  return (
    <div className='overflowX-hidden' >

     <Header/>
     <HomeBody/>
     <Footer/>
     </div>
  )
}

export default Homepage