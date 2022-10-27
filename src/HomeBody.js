import React from 'react'
import './Homepagebody.css'
import Homebodycards from './Homebodycards'
export const HomeBody = () => {
  return (
    <div  style={{}} className='relative bg-{#eaeded}' >
        <img alt='' src='/amzonfrontimage.jpg' className='w-screen z-[0]  '/> 
        <div className='absolute top-[55%] left-[25%] sm:top-[25%] md:top-[55%] md:left-[1%] grid grid-cols-1 gap-5 sm:grid-cols-3  lg:grid-cols-6 md:pl-14 lg:pl-10 '>
        <Homebodycards id={1} text='phone' rating={5} img='/phone.jpg' price={123} />
        <Homebodycards id={2} text='mobile' rating={2} img='/phone.jpg' price={1024} />
        <Homebodycards id={3} text='ipjone' rating={4} img='/phone.jpg' price={1093} />
        <Homebodycards id={4} text='abssdgrfgdfgdf' rating={5} img='/phone.jpg' price={2091}/>
        <Homebodycards id={5} text='abssdgrfgdfgdf' rating={5} img='/phone.jpg' price={10038}/>
        <Homebodycards id={6} text='abssdgrfgdfgdf' rating={5} img='/phone.jpg'price={1239} />
        <Homebodycards id={7} text='abssdgrfgdfgdf' rating={5} img='/phone.jpg' price={12456} />
        </div>
    </div>
  )
}
export default HomeBody