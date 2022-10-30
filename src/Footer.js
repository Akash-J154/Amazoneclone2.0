import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='invisible sm:visible'>
    <div className='invisible md:visible md:mt-[200%] mt-[70%] bg-[#232f3e] text-white md:h-[50%] lg: h-72 lg:mt-[70%] lg:h-80 border-none border-bottom-gray-100'>
        <div className='ml-[1%] lg:ml-[20%] flex flex-row pt-20  '>
            <div className='text-center flex flex-col md:ml-5 lg: ml-20'>
             <h3 className='font-bold'>Get to Know Us</h3>  
             <Link to="/About us">About us</Link> 
             <Link to="/Careers">Carriers</Link>  
             <Link to="/Press Release">Press Release</Link>  
             <Link to="/Amazon Science">Amazon Science</Link>  
            </div>
            <div className='text-justify flex flex-col md:pl-10 lg:pl-20'>
           <h3 className='font-bold'>Connect to Us</h3> 
            <Link to="/Facebbok">Facebook</Link>
             <Link to="/Twitter">Twitter</Link>  
            <Link to="/Instagram">Instagram</Link>  
            </div>
            <div className='text-justify flex flex-col md:pl-10 lg:pl-20'>
           <h3 className='font-bold'>Make Money with  Us</h3>  
            <Link to="/Sell on amazon">Sell on Amazon</Link> 
           <Link to="/Twitter">Sell under Amazon Accelerator</Link>  
             <Link to="/Instagram">Amazon Global Selling</Link>  
            </div>
            <div className='text-justify flex flex-col md:pl-8 lg:pl-20'>
           <h3 className='font-bold'>Let us help You</h3>  
            <Link to="/Sell on amazon">Covid-19 and Amazon</Link>
            <Link to="/Twitter">Your Account</Link>  
            <Link to="/Instagram">Returns center</Link>  
            <Link to="/Instagram">100% Purchase Protection</Link>  
            <Link to="/Instagram">Amazon App Download</Link> 
            </div>
           
        </div>
        <hr  width='100%'  className='mt-12 bg-red-200 ' style={{height:".1px"}} />
    </div>
    <div className='bg-[#131a22] text-white text-xs h-56 '>
        <div className=' flex flex-row pl-12 pt-12 '>
            <a href='https://www.abebooks.com/' className='pl-72'>AbeBooks<br></br>Books,art<br></br>&collectibles</a>
            <a href='https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter' className='pl-32'>Amazon Web Service<br></br>Scalable Cloud</a>
            <a href='https://www.audible.in/'className='pl-32'>AUdible<br></br>Download<br></br>Audio Books</a>
            <a href='https://www.dpreview.com/' className='pl-32'>DPReview<br></br>Digital <br></br>Photography</a>
            <a href='https://www.imdb.com/' className='pl-32'>IMDb<br></br>Movies,TV<br></br>&Celebrities</a>
        </div>
        <div className='mt-12'>
            <a href='https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_4d1ohbptwj_e&adgrpid=58490306106&hvpone=&hvptwo=&hvadid=486391490878&hvpos=&hvnetw=g&hvrand=11224869502122551055&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9040210&hvtargid=kwd-298187295805&hydadcr=5657_2175734' className='pl-[40%]   '>Conditions of Use & Sale</a>
            <a href='' className='pl-12'>Privacy Notice</a>
            <a href='https://www.amazon.in/gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy' className='pl-12'>Internet-Based Ads</a>
            <p className='pl-[44%] pt-4'>1996-2022,Akash Amazon.com,Inc ,or its affiliates</p>
        </div>
    </div>
    </div>
  )
}

export default Footer