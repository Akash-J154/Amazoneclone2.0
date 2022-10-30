import React, { useContext } from 'react'
import Header from './Header'
import HomeBody  from './HomeBody'
import { UseContent } from './UseContent'
const Homepage = () => {
  const {showcart}=useContext(UseContent)
  return (
    <div className='overflowX-hidden' >

     <Header/>
     
     <HomeBody/>
     </div>
  )
}

export default Homepage