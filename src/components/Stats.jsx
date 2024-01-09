import React from 'react';
import { stats } from '../constants';
import styles from '../style';


const Stats = () => (

  <div className={`flex w-full justify-between flex-wrap items-center`}>

    {stats.map((stat) => (
      <div className={`flex flex-1 items-center justify-start text-white m-3`}>
        <h1 className='xs:leading-[56.16px] xs:text-[40px] text-[30px] font-bold'>{stat.value}</h1>
        <span className='font-poppins ml-3 font-normal uppercase text-gradient text-[15px] xs:text-[20px] xs:leading-[26.58px] leading-[21.58px] mt-2'>{stat.title}</span>
      </div> 
    ))}

  </div>
)

export default Stats