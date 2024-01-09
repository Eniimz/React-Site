import React from 'react';
import styles from '../style';
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  
    <section  id="clients" className={`flex flex-col ${styles.flexCenter} ${styles.paddingY}`}>

        <div className={`flex flex-col md:flex-row items-center gap-2 w-full justify-between`}>

            <h1 className={`${styles.heading2}`}>What people are <br className='sm:block hidden' />saying about us</h1>
            <div className='w-full'>
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                Everything you need to accept card payments and 
                grow your business anywhere on the planet.
                </p>   
            </div>

        </div>
        <div className='flex flex-wrap w-full sm:justify-start gap-9 justify-center feedback-container'>

            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card}/>
            ))}
            
        </div>

    </section>

)

export default Testimonials