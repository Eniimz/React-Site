import React from 'react';
import {apple, bill,  google} from '../assets';
import styles from '../style';

const Billing = () => (

  <section id="product" className='flex md:flex-row flex-col-reverse justify-center items-center gap-10 mb-1'>

    <div className='flex flex-1 justify-center items-center relative'>
      <img src={bill} alt="" className='w-[100%] h-[100%] relative z-[5]'/>

      <div className='absolute z-[3] left-1/2 top-0 w-[50%] h-[50%] rounded-full
      white__gradient'/>
      <div className='absolute z-[0] left-1/2 top-0 w-[50%] h-[50%] rounded-full
      pink__gradient'/>
    </div>

    <div className='flex flex-1 flex-col gap-4'>

      <h2 className={`${styles.heading2}}`}>
        Easily control your <br className='sm:block hidden'/> billing & invoicing.
      </h2>

      <p className={`${styles.paragraph} max-w-[470px]`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. 
        Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className='flex flex-row gap-4'>
        <img src={apple} alt="" className='w-[128px] h-[42px] cursor-pointer' />
        <img src={google} alt="" className='w-[128px] h-[42px] cursor-pointer '/>
      </div>

    </div>

  </section>

)

export default Billing