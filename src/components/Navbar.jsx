import React, { useState } from 'react';
import {close, logo, menu} from '../assets';
import { navLinks } from '../constants'; 

const Navbar = () => {

  const [toggle, setToggle] =  useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>

      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>

      <ul className='list-none hidden justify-end sm:flex flex-1'>

        {navLinks.map((navlink, index)=> (
          <li className={`font-poppins font-normal text-[16px] cursor-pointer text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} key={navlink.id}>
             <a href={`#${navlink.id}`}>
              {navlink.title}
              </a>          
          </li>
        ))

        }
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>

        <img 
        src={toggle ? close : menu}
        onClick={() => setToggle((prev) => prev = !prev)}
        className='cursor-pointer w-[27px] h-[27px] object-contain'
        />


      <div className={`rounded-md p-6 min-w-[140px] bg-black-gradient ${toggle ? 'flex' : 'hidden'}
      absolute top-16 my-0 right-0 mx-11 flex-col sidebar
      `} 
      >
      <ul className='list-none  text-white sm:flex flex-1 justify-center items-center'>

      {navLinks.map((navlink, index)=> (
        <li 
        className={`font-poppins font-normal text-[16px] cursor-pointer text-white mb-1 flex flex-col justify-center items-center`} key={navlink.id}>
          <a href={`#${navlink.id}`}>
            {navlink.title}
            </a>          
        </li>
      ))

      }
      </ul>
      </div>



      </div>

     




    </nav>
  )
}

export default Navbar