import React, { useContext } from 'react'
import './Homepagebody.css'
import Homebodycards from './Homebodycards'
import { UseContent } from './UseContent'
import Cart from './Cart'
import Cartitems from './Cartitems'
import { ContactSupportOutlined, IsoTwoTone } from '@mui/icons-material'

export const HomeBody = () => {
  const {products,searchbar,setsearchbar}=useContext(UseContent)
  let index=[];
  let result=[]
  let indo=1
  return (
    searchbar?(
      <div className='relative ' >
        <img alt='' src='/amzonfrontimage.jpg' className='w-screen z-[0]  '/> 
        <div className='bg-gray-200'>
          {/* {console.log(searchbar)} */}
        <div className='absolute top-[55%] left-[25%] sm:top-[25%] md:top-[55%] md:left-[1%] grid grid-cols-1 gap-5 sm:grid-cols-3  lg:grid-cols-6 md:pl-14 lg:pl-10 '>
          { 
          indo=products.findIndex((items,pp)=> (items.text.localeCompare(searchbar))
         )
         
        //  products.filter((result)=>{if(result?.text?.includes(searchbar))
        //     return result}).map((item,index)=>{return <Homebodycards key={index} id={item.id} text={item.text} rating={item.rating} img={item.img} price={item.price} />})


      }
        

           
          
        
        </div>
        </div>
    </div>
    ):(
    <div className='relative ' >
        <img alt='' src='/amzonfrontimage.jpg' className='w-screen z-[0]  '/> 
        <div className='bg-gray-200'>
        <div className='absolute top-[55%] left-[25%] sm:top-[25%] md:top-[55%] md:left-[1%] grid grid-cols-1 gap-5 sm:grid-cols-3  lg:grid-cols-6 md:pl-14 lg:pl-10 '>
          {products.map((items,id)=>{
            return  <Homebodycards key={id} id={items.id} text={items.text} rating={items.rating} img={items.img} price={items.price} />
          })}
        </div>
        </div>
    </div>
    )
        
  )
}
export default HomeBody