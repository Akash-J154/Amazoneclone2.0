import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {UseContent} from './UseContent';
import { useState } from 'react';
const Header = () => {
   const {cartvalue,searchbar,setsearchbar,showcart}=useContext(UseContent)
  
   const handlesearch=()=>{

   }
  return (
    <>
    <div className='flex flex-col  sm:flex-row bg-[#131921] w-screen h-28 relative '>
        <div className='w-full h-12  sm:w-[20%] md:h-28 md:28 '>
          <a href='/'><img src='/Amazon Logo.png' alt='' className='ml-3 mt-0 w-32 h-13 sm:mt-8 '/></a>
        {showcart ?<> <Link to='/Cart' className='text-white '><ShoppingBasketIcon className='visible absolute right-12 top-5 sm:invisible lg:ml-56'/></Link>
        <div className='text-white absolute right-6 top-6 visible sm:invisible '>{cartvalue}</div> </>  :
        <>
          <Link to='/Signin' className='text-white absolute bottom-4 right-28 text-sm visible sm:invisible' >Signin</Link>
          <Link to='/Signup' className='text-white absolute bottom-4 visible right-10 text-sm md:invisible'>SignUp</Link> 
           </>}
         
        </div>
        <div className='w-screen h-16 sm:w-[100%] h-28 font-semibold flex flex-row items-center' >
        
        <input type={"text"} value={searchbar} placeholder='search' onChange={(e)=>{setsearchbar(e.target.value)}} className='ml-4 w-80 mt-3 text-black  sm:mt-10 sm:pt-3 lg:w-2/3 '> 
        </input>
        <div></div>
        <button className='ml-14'><img src='searchicon.png' alt='' className=' w-6 absolute left-[46%] top-[68%] md:left-[56%]  top-[36%] lg:left-[71%] lg:bg-[#f4d077] lg:w-9 lg:top-[31%]' onClick={handlesearch}/></button>
        <div className='relative  h-full '>

          <button className="invisible sm:visible peer  bg-[#131921]  hover:bg-[#131921] hover:border-solid hover:border-2  text-white sm:w-20 text-xs md:mt-12 " >Hello,sign in <br></br> Account & Lists</button>
        
          <div className="hidden peer-hover:flex hover:flex
          w-[200px] h-[200px] z-[999] absolute top-[140%]
          flex-col bg-white drop-shadow-lg pl-14 pt-5">
            <Link to='/Signin' >Sign In</Link> 
            <Link to='/Signup'>Sign Up</Link>
          </div>
        </div>
        <button className="invisible sm:visible  bg-[#131921]  hover:bg-[#131921] hover:border-solid hover:border-2 text-white sm:-mr-32 sm:w-20 md: w-32 md: h-9 text-xs md:mt-16  lg:w-24 lg:h-12 lg:ml-12 lg:mt-16" >Returns <br></br>& Orders</button>
      { showcart &&<> <Link to='/Cart' className='text-white '><ShoppingBasketIcon className='invisible md:visible mb-12 absolute right-12 md:top-14  lg:ml-56'/></Link>
       <div className=' ml-60 invisible text-white sm:visible absolute  sm:right-9 sm:bottom-8'>{cartvalue}</div></>}
      
        
        </div>
       
    </div>
    </>
  )
}

export default Header