import React, { useContext } from 'react'
import './Homepagebody.css'
import Homebodycards from './Homebodycards'
import { UseContent } from './UseContent'
export const HomeBody = () => {
  const {products,searchbar}=useContext(UseContent)
  let indo=1
  let result=[]
  return (
    searchbar?(
      <div className='relative'  >
        {/* <img alt='' src='/amzonfrontimage.jpg' className='w-screen z-[0]  ' />  */}
        <div className='bg-gray-200'>
        <div 
        className='grid grid-cols-1 absolute top-[55%] gap-10 md:grid-cols-3 lg:grid-cols-5'>
          {
          products.filter((result)=>{if(result?.text?.includes(searchbar))
             return result}).map((item,index)=>{return <Homebodycards key={index} id={item.id} text={item.text} rating={item.rating} img={item.img} price={item.price} />})
          }
        </div>
        </div>
    </div>
    ):(
    <div style={{position:"relative"}} className='ba' >
          <img alt='' src='/amzonfrontimage.jpg' className='w-screen z-[0] h-72 lg:h-auto from-pink-700 to-white'/>   
        <div className='bg-gray-200 flex flex-col items-center'>
        <div 
        className=' grid grid-cols-1 absolute top-[35%] lg:top-[55%]  gap-10 items-center md:grid-cols-3 lg:grid-cols-5  '>
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