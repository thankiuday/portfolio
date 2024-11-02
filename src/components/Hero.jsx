import React from 'react'
import udayThanki from '../assets/udayThanki.jpeg'
import { motion } from "framer-motion"
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});
const Hero = () => {
    return (
        <div className='border-b border-purple-800 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start '>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-6xl font-thin tracking-tight lg:my-16
                        lg:text-8xl'
                        >Uday Thanki</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className=' bg-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'
                        >
                            Mern Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-2xl py-6 font-light tracking-tighter '
                        >A motivated and self-driven web developer with a Bachelor's degree in Computer Applications and hands-on
                            experience in building full-stack applications. Possessing entry level proficiency in front-end technologies like
                            React.js, JavaScript, and Bootstrap, along with basic back-end knowledge in MongoDB, Node.js, and SQL.
                            Demonstrated ability to create responsive, real-time applications such as chat and weather apps. Currently
                            pursuing an MCA to further develop technical skills and industry knowledge. Fluent in English, Hindi, and
                            Gujarati, with excellent problem-solving, adaptability, and communication skills.</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                        initial={{x:100,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:1,delay:1}}
                            src={udayThanki}
                            alt="Uday Thanki"
                            className='rounded-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero