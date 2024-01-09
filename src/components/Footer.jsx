import React from 'react'
import { logo } from '../assets'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section className={`w-full flex flex-col justify-center items-start gap-7 ${styles.paddingY}`}>
    <div className={`flex md:flex-row flex-col w-full md:gap-32 `}>
      <div className='flex flex-col gap-8 items-start '>

        <div className=''>
        <img src={logo} alt="" className='md:w-[200px] w-[280px]' />
        </div>
        

        <p className={`font-poppins font-normal text-dimWhite md:text-[16px] ml-4`}>
          A new way to make the payments <br className='md:hidden block' />easy, reliable and secure.
          
        </p>
      </div>

      <div className='flex flex-row flex-wrap w-full justify-between items-start md:my-0 my-12 md:ml-4 md:mr-12'>

        {footerLinks.map((column) => (

          <div className='flex flex-col gap-3 mt-5'>

            <h1 className='text-white font-semibold font-poppins text-[18px]'>{column.title}</h1>
            {column.links.map((link_el) => (
              <a href={`#${link_el.link}`} className='text-dimWhite font-poppins text-[15px] cursor-pointer hover:text-secondary'>{link_el.name}</a>
            ))}

          </div>


        ) 
      )}

      </div>
    </div>

    <div className='flex md:flex-row flex-col border-t border-dimWhite md:justify-start justify-center w-full gap-9 md:items-center md:pt-6'>
      <p className='text-dimWhite flex-1 font-poppins font-normal text-[15px] w-full flex justify-center md:justify-start md:mt-0 mt-5'>Copyright &copy; 2021 HooBank.All Rights Reserved.</p>

      <div className='flex flex-1 justify-center md:justify-end gap-7 items-center w-full md:w-auto'>
        {socialMedia.map((app) => (
          <img src={app.icon} href={app.link} alt="" className='w-[24px] cursor-pointer' />
        ))}
      </div>
    </div>

  </section>
)

export default Footer