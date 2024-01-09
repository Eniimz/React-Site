import React from 'react'
import styles from '../style'
import Button from './Button'
import { card } from '../assets';

const CardDeal = () => (
  <section className={`flex md:flex-row flex-col w-full ${styles.paddingY}`}>

    <div className='flex flex-1 flex-col  justify-center items-start gap-4 md:my-20'>

      <h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>

      <p className={`${styles.paragraph} max-w-[470px]`}>
      Arcu tortor, purus in mattis at sed integer faucibus. 
      Aliquet quis aliquet eget mauris tortor.ç Aliquet
      ultrices ac, ametau.
      </p>

      <Button />

    </div>

    <div className='flex flex-1 justify-center items-center'>

      <img src={card} alt="" className='w-full h-full' />

    </div>

  </section>
)

export default CardDeal