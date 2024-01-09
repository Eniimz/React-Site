import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} my-16`}>

    <div className={`w-full flex flex-wrap bg-black-gradient-2 px-6 md:mx-32 md:px-14 sm:py-10 pt-7 justify-between items-center rounded-xl box-shadow`}>

      <div className='flex flex-wrap flex-col justify-center items-start gap-5'>
        <h1 className={`font-poppins text-white font-semibold sm:text-[43px] text-[45px] leading-[50px]`}>Lets try our service now! </h1>
        <p className={`font-poppins font-normal text-dimWhite text-[18px] sm:max-w-[450px]`}>
          Everything you need to accept card payments
          and grow your business anywhere on the planet.
        </p>
      </div>


      <Button />

    </div>
  </section>
)

export default CTA