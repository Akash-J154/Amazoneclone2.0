import React, { useContext, useEffect } from 'react'
import Header from './Header'
// import CurrencyFormat from 'react-currency-format';
import { UseContent } from './UseContent';
import Homebodycards from './Homebodycards';
import Cartitems from './Cartitems';
import Signin from './Signin';
import Checkout from './Checkout';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartitems,totalprice,personalinfo}=useContext(UseContent)
  const Navigate=useNavigate()
  const handleproceed=()=>{
    console.log("inside handleproceed")
    console.log(personalinfo)
    if(JSON.stringify(personalinfo)==='{}'){
      Navigate('/Signin')
    console.log('entered sigin')
    }
    else{
    Navigate('/Cart/Checkout')
    console.log('inside checkout')
    }
  }
  useEffect(()=>{
    console.log(cartitems)
  },[cartitems])
  return (
    <div >
      <Header/>
      
     <div className='flex flex-row w-screen '>
      <div className='w-2/3 sm:w-3/4 bg-white'>
      <p className='text-lg pt-12 pl-14'>Your shopping basket</p>
      </div>
      <div className='w-1/3 pt-12 sm:w-1/4 sm:pl-12 sm:pt-12 bg-gray-200 h-56'>
       <p className='font-bold'>$ Subtotal :{totalprice}</p>
      <br></br>
      <button className=' bg-yellow-200 mt-6 rounded-md text-sm  w-28 ml-2 md:w-32 lg:w-48 ' onClick={handleproceed}>Proceed to Checkout</button>
      </div>
     </div>
      { cartitems.length>0 ?
        cartitems.map((item,index)=>{
         
          return( <Cartitems key={index} id={item.id} text={item.text} rating={item.rating} img={item.img} price={item.price}/>       
          )
          
        })
        :
        <p className='bg-white'>No items</p>
      }
       
    </div>
  )
}

export default Cart