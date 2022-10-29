import React from 'react'
import { Card } from 'react-bootstrap'
import { useState,useRef } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [password,setpassword]=useState('');
    const [errmsg,seterrmsg]=useState('')
     const errref=useRef(0);
   return (
    <div>
        <img src='/amazonwhite.png ' className='w-48 ml-[43%]' alt=''/>
        <Card className='bg-white border-2 ml-[38%] w-[27%] pl-[1%] mt-0 '>
            <Card.Text className='font-normal text-3xl '>Create Account</Card.Text><br></br>
            <label className='mt-7 font-semibold'>Your name</label><br></br>
            <input type={'text'} placeholder='First and last name' required className='w-[90%] hover:shadow-red-900' ></input><br></br><br></br>
            <label className='font-semibold'>Mobile number</label><br></br>
            <input type={'number'} placeholder='Mobile number' required className='w-[90%]'></input><br></br><br></br>
            <label className='font-semibold'>Email(optional)</label><br></br>
            <input type={'email'} className='w-[90%]'></input><br></br>
            <label className='font-semibold'>Password</label><br></br>
            <input type={'password'} placeholder='At least 6 characters' className='w-[90%]' value={password} onChange={(e)=>{setpassword(e.target.value)}}></input><br></br><br></br>
            {
               password.length<6 &&
               (
                  seterrmsg('password must be atleast six characters')
               )      
            }
            <p ref={errref}>{errmsg}</p>
            
                    {   
                        //  if(errref.current!=null)
                        //  {
                        //  errref.current.focus()
                        // }
                      }
            <p>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</p>
            <br></br><Link><button className='border-2 bg-[#f4d077] w-96'>Continue</button></Link>

        </Card>
    </div>
  )
}

export default Signup