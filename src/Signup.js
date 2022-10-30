import React from 'react'
import { Card } from 'react-bootstrap'
import { useState,useRef,useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { UseContent } from './UseContent';
const Signup = () => {
  const {name,setname}=useContext(UseContent)
    const [password,setpassword]=useState('');
    const [Errmsg,setErrmsg]=useState('')
     const errref=useRef(null);
    
     axios.post('http://jsonplaceholder.typicode.com/posts', {
      name:{name}
    })
    .then(function (response) {
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    });
   return (
    <div>
        <img src='/amazonwhite.png ' className='w-48 ml-[23%] sm:ml-[43%]' alt=''/>
        <Card className='bg-white border-2 ml-[6%] w-[87%] pl-[1%] mt-0 md:ml-[23%] md:w-[57%]  lg:w-[27%] lg:ml-[37%]  '>
        <p ref={errref}>{Errmsg}</p>
            <Card.Text className='font-normal text-3xl '>Create Account</Card.Text><br></br>
            <label className='mt-7 font-semibold' onChange={(e)=>{setname(e.target.value)}} value={name} >Your name</label><br></br>
            <input type={'text'} placeholder='First and last name' required className='w-[90%] hover:shadow-red-900' ></input><br></br><br></br>
            <label className='font-semibold'>Mobile number</label><br></br>
            <input type={'number'} placeholder='Mobile number' required className='w-[90%]'></input><br></br><br></br>
            <label className='font-semibold'>Email(optional)</label><br></br>
            <input type={'email'} className='w-[90%]'></input><br></br>
            <label className='font-semibold'>Password</label><br></br>
            <input type={'password'} placeholder='At least 6 characters' className='w-[90%]' value={password} onChange={(e)=>{setpassword(e.target.value)
            password.length<6 ? (
              setErrmsg("password must be atleast six charcters")
               (errref.current!== null && errref.current.focus())
              )
              : setErrmsg('')
             

            }}></input><br></br><br></br>
            <p>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</p>
            <br></br><Link><button className='border-2 bg-[#f4d077] w-80 sm:w-96'>Continue</button></Link>

        </Card>
    </div>
  )
}

export default Signup