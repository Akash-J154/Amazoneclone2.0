import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Signin = () => {
  const [email,setemail]=useState(null)
  const [password,setpassword]=useState(null)
  return (
    <div>
      <img src='/amazon white logo.png' alt='' className='w-32 ml-[44%] mt-[3%]'/>
       <Form className='border-2 absolute top-[20%] left-[40%] w-72 h-80 pl-8'>
        <Form.Text className='text-lg font-semibold'>Sign In</Form.Text><br></br><br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label><br></br>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label><br></br>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="primary" type="submit" className='bg-yellow-300 w-56'>
        Submit
      </Button><br></br>
      <Form.Text>By signing in you are agreeing to the terms and conditions of the amazon by akash </Form.Text>
      <Link><button className='border-2 bg-gray-200 mt-3'>Create your amazon account</button></Link>
    </Form>
    </div>
  )
}

export default Signin