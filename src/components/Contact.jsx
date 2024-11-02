import React from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <div
    
    className='border-b border-purple-800 pb-20'>
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-10 text-center text-4xl'>Get In Touch</motion.h2>
        <div className='text-center  tracking-tighter'>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className='my-4'>9,Garden Ave Road,Near Garden City University,Banglore 560049.</motion.p>
            <motion.a 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            href="#" className='my-4 border-b'>udaythanki2@gmail.com</motion.a>
        </div>
    </div>
  )
}

export default Contact