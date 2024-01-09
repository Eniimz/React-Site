import React from 'react';
import { clients } from '../constants';


const Clients = () => (
  <section className={`flex justify-center items-center my-4`}>
    <div className={`flex flex-row flex-wrap justify-center items-center w-full px-14`}>

      {clients.map((client) => (

        <div className='flex justify-center items-center flex-1 sm:min-w-[192px] min-w-[120px] '>
          <img src={client.logo} alt="" className='sm:w-[192px] w-[100px] object-contain'/>
        </div>

      ))}

    </div>
  </section>
)

export default Clients