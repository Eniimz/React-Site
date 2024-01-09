import React from 'react';
import { features } from '../constants';
import styles from '../style';
import Button from './Button';

const Business = () => (

  <section id="features" className='flex md:flex-row flex-1 flex-col md:my-24 my-10 w-full md:gap-16'>

    <div className={`flex flex-1 flex-col items-start gap-4 md:my-16`}>
      <h1 className='text-white font-bold font-poppins text-[52px] md:text-[42px]'>You do the business,<br/>we'll handle the money.</h1>

      <p className='text-dimWhite w-3/4 text-[19px] md:text-[20px]'>With the right credit card, you can improve your financial life 
        by building credit, earning rewards and saving money. But with 
        hundreds of credit cards on the market.
      </p>

      <Button />
      
    </div>

    <div className={`flex flex-col items-center gap-14 md:gap-4 w-full md:my-0 my-6 flex-1`}>
    
    {features.map((feature) => 
    
    <div className={`flex flex-row rounded-xl py-8 px-5 text-white gap-3 font-poppins items-center feature-card`}>

      <div className='mb-4 bg-dimBlue px-2.5 py-2.5 rounded-full '>
      <img src={feature.icon} className='h-[37px] w-[37px]' alt="" />
      </div>
      <div className='flex flex-col w-full '>
        <span className='font-semibold text-[18px] '>{feature.title}</span>
        <p className=' text-dimWhite text-[16px] md:max-w-[500px] '>{feature.content}</p>
      </div>

    </div>  

    )}

    </div>

  </section>

  
)

export default Business