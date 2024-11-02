import React from 'react'
import { motion } from 'framer-motion'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'

const iconVarient = (duration)=>({
    initial : {y:-10},
    animate: {
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType: "reverse"
        }
    },
})

const Technologies = () => {
    return (    
        <div className='border-b border-purple-800 pb-16 '>
            <h2 className='my-20 text-center text-4xl'>Technologies</h2>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4 sm:gap-1'>
                <motion.div
                variants={iconVarient(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-400 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                variants={iconVarient(3)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-400 p-4'>
                    <SiMongodb className='text-7xl text-green-600' />
                </motion.div>
                <motion.div 
                variants={iconVarient(5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-400 p-4'>
                    <SiExpress className='text-7xl text-yellow-500' />
                </motion.div>
                <motion.div
                variants={iconVarient(2)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-400 p-4'>
                    <SiNodedotjs className='text-7xl text-green-800' />
                </motion.div>
                <motion.div 
                variants={iconVarient(5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-400 p-4'>
                    <SiBootstrap className='text-7xl text-bootstrapPurple ' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies