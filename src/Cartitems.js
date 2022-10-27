import React, { useContext, useEffect,useState } from 'react'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { Rating } from '@mui/material'
import { UseContent } from './UseContent'
import Cart from './Cart'
const Cartitems = ({id,text,rating,img,price}) => {
    const {cartitems,setval,cartval,setitems,setprice,totalprice}=useContext(UseContent)
    const  handleclick=async(e)=>{
      e.preventDefault()
      let index=await cartitems.findIndex((items)=>items.id===id)
      console.log(index)
      if(index!==-1){
        console.log(index)
        setitems((prev_state)=>{
          let temp = prev_state;
          temp.splice(index,1);
          return temp;


        })
        setprice(totalprice-price)
      setval((val)=>{
        if (val>0)
          val--;
        return val
      })
     }

    }

 
    // useEffect(()=>{
    //   console.log('useeffect reached')
    //  cartitems.map((items,index)=>{
    //   return <Cartitems id={items.id} text={items.text} rating={items.rating} img={items.img}/>
    //  })
    // }
    // ,[make]);
 
  return (
    <div>
         <Card  className=' border-solid border-2 border-white bg-white text-justify justify-center pl-12'>
      <Card.Body>
        <Card.Text>
         {text}
        </Card.Text>
    <Rating name="read-only" value={rating} readOnly />
        <Card.Img variant="top" src={img} /><br></br>
        <Card.Text>{price}</Card.Text>
        <Button variant="warning" className='delete'  style={{background:"#fcb603",width:"28%"}} onClick={(e)=>handleclick(e)}>Delete from Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cartitems