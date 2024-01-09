import React from 'react';
import { arrowUp } from '../assets';

const GetStarted = () => (
  
  <div className=' bg-blue-gradient rounded-full h-[140px] w-[140px] p-0.5'>

    <div className='bg-primary cursor-pointer rounded-full w-full h-full flex items-center justify-center'>
      <p className='text-[16px] font-poppins leading-5 text-gradient mr-1'>Get 
      <img src={`${arrowUp}`} alt="" className={`inline-block w-[23px] h-[23px]`}/>
      <br/>Started 
      </p>
    </div>

  </div>

)

export default GetStarted