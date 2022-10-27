import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {UseContent} from './UseContent';
const Header = () => {
   const {cartvalue}=useContext(UseContent)
  return (
    <>
    <div className='flex flex-col sm:flex-row bg-[#131921] w-screen h-28 relative '>
        <div className='w-screen h-12  sm:w-[20%] md:h-28 md:28 '>
          <a href='/'><img src='/Amazon Logo.png' alt='' className='ml-1 mt-0 w-32 h-12 sm:mt-8 '/></a>
          <Link to='/Cart' className='text-white '><ShoppingBasketIcon className='visible absolute right-12 top-5 sm:invisible lg:ml-56'/></Link>
          <Link to='/Signin' className='text-white absolute top-5 right-40 visible sm:invisible' >Sign in</Link> 
          <div className='text-white absolute right-6 top-6 visible sm:invisible '>{cartvalue}</div> 
        </div>
        <div className='w-screen h-16 sm:w-[100%] h-28 font-semibold flex flex-row items-center' >
        
        <input type={"text"} className='ml-4 w-80 mt-3 text-black  sm:mt-10 sm:pt-3 lg:w-2/3 '>
         
        </input>
        <button className='ml-14'><img src='searchicon.png' alt='' className='w-6 absolute left-[78%] top-[55%] md:left-[56%]  top-[36%] lg:left-[70%]'/></button>
        <div className='relative  h-full '>

          <button className="invisible sm:visible peer  bg-[#131921]  hover:bg-[#131921] hover:border-solid hover:border-2  text-white sm:w-20 text-xs md:mt-12 " >Hello,sign in <br></br> Account & Lists</button>
        
          <div className="hidden peer-hover:flex hover:flex
          w-[200px] h-[900px] z-999 absolute top-[140%]
          flex-col bg-white drop-shadow-lg ">
            <Link to='/Signin' >Sign in</Link> 
          </div>
        </div>
        <button className="invisible sm:visible  bg-[#131921]  hover:bg-[#131921] hover:border-solid hover:border-2 text-white sm:-mr-32 sm:w-20 md: w-32 md: h-9 text-xs  lg:w-24 lg:h-12 lg:ml-12 lg:mt-16" >Returns <br></br>& Orders</button>
       <Link to='/Cart' className='text-white '><ShoppingBasketIcon className='invisible md:visible mb-12 absolute right-12 md:top-14  lg:ml-56'/></Link>
       <div className=' ml-60 invisible text-white sm:visible absolute  sm:right-9 sm:bottom-8'>{cartvalue}</div>
        
        </div>
       
    </div>
    </>
  )
}

export default Header