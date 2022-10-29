import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import Homepage from './Homepage';
import Signup from './Signup';
// import { getAuth } from './firebase';
import { useRef } from 'react';
import { UseContent } from './UseContent';
const Signin = () => {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [errmsg,seterrmsg]=useState('')
  const errref=useRef()
  const emailref=useRef()
  const [state,setstate]=useState(true)
  const {setpersonalinfo,personalinfo}=useContext(UseContent)
  useEffect(()=>{
    seterrmsg('')
  },[email,password])
  useEffect(()=>{
    emailref.current.focus()
  },[])
  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post('http://jsonplaceholder.typicode.com/posts', {
      email: {email},
      password: {password}
    })
    .then(function (response) {
      console.log(response);
      setpersonalinfo({email,password})
      setemail('')
      setpassword('')
      console.log(personalinfo)
      setstate(false)
    })
    .catch(function (error) {
      if(error.response.status===400)
      seterrmsg('invalid username or password')
      else if(error.response.status===404)
        seterrmsg('Not found response code');
        else
        seterrmsg('Login Failed');
        if(errref.current!==null)
        errref.current.focus();

    });

  }
  const handlecreateaccount=(e)=>{
    // e.preventDefault()
    // getAuth.createUserWithEmailAndPassword(email,password)
    // .then((auth)=>{
    //   console.log(auth)
    // })
    // .catch((error)=>{
    //   alert(error.message)
    // })
   <Signup/>

  }
  return (
    state?(
    <div >
      <img src='/amazon white logo.png' alt='' className='w-32 ml-[33%] sm:ml-[44%] mt-[3%]'/>
       <Form className='bg-white border-2 absolute w-72 ml-10 sm:top-[20%] sm:left-[40%] sm:w-72 h-80 pl-8' onSubmit={handlesubmit}>
        <Form.Text className='text-lg font-semibold'>Sign In</Form.Text><br></br><br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label><br></br>
        <Form.Control type="email" placeholder="Enter email" ref={emailref} value={email} onChange={(e)=>setemail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label><br></br>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="primary" type="submit" className='bg-yellow-300 w-56' >
        Submit
      </Button><br></br>
      <Form.Text>By signing in you are agreeing to the terms and conditions of the amazon by akash </Form.Text>
      <Link to='/Signup'><button className='border-2 bg-gray-200 mt-3 w-[90%]'onClick={handlecreateaccount}>Create your amazon account</button></Link>
     {
      errmsg && <>
                  <p ref={errref}>{errmsg}</p>
                  </>
}
    </Form>
    </div>
    ):(

      <Homepage/>
      
    )
    
  )
    
}

export default Signin