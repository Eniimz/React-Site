import React from 'react';
import { quotes } from '../assets';
import styles from '../style';

const FeedbackCard = ({content, name, title, img}) => (

  <div className='flex flex-col px-10 py-12 mt-14 gap-8 max-w-[370px] rounded-[20px]  justify-between feedback-card'>

      <div className='w-[42px] h-[27px]'>

      <img src={quotes} alt="" className='w-full h-full' />

      </div>
      
      <p className={`${styles.paragraph}`}>
        {content}
      </p>
      <div className='flex flex-row gap-4'>

        <img src={img} alt="" className='w-[48px] h-[48px] rounded-full' />

        <div className='flex flex-col justify-center items-start mt-1'>
          <h4 className='text-white font-poppins font-semibold'>{name}</h4>
          <span className='text-dimWhite font-poppins font-normal'>{title}</span>
        </div>

      </div>

  </div>

)

export default FeedbackCard;