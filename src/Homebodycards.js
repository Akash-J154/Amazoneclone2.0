import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '@mui/material/Rating';
import {useContext} from 'react'
import {UseContent} from './UseContent'
const Homebodycards = ({id,text,rating,img,price}) => {
  let {cartvalue,setval,setitems,cartitems,setprice,totalprice}=useContext(UseContent)
  const handleclick=async()=>{
    let index =await  cartitems.findIndex((item)=> id===item.id);
    console.log(index)

    if (index===-1)
    {
      setval(cartvalue+1)
      setitems([...cartitems,{id,text,rating,img,price}])  
     setprice(totalprice+price)
   
    }
  }
  return (  
    
    <div >
      <Card  className='w-60 border-solid border-2 border-white bg-white text-justify justify-between pl-7 mt-2 h-96  '>
      <Card.Body>
        <Card.Text>
         {text}
        </Card.Text>
    <Rating name="read-only" value={rating} readOnly />
        <Card.Img variant="top" src={img} className='h-56' /><br></br>
        <Card.Text className='font-semibold'>${price}</Card.Text>
        <Button variant="warning" style={{background:"#fcb603",width:"68%"}} onClick={handleclick} >Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Homebodycards