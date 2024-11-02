import React from 'react'
import aboutMe from '../assets/about.jpg'
import { motion } from 'framer-motion'
const AboutMe = () => {
    return (
        <div className='border-b border-purple-800 pb-4'>
            <h2 className='my-20 text-center text-4xl'>About <span className='text-purple-500'>Me</span>
            </h2>
            <div className='flex flex-wrap'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img src={aboutMe} alt="" className='rounded-2xl' />
                    </div>
                </motion.div>
                <div className='w-full lg:w-1/2'>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                     className='flex justify-center lg:justify-center'>
                        <p className='my-2 max-w-xl py-6'>
                            With a deep interest in technology, I have earned my Bachelor's degree in Computer Applications (BCA) from Bhakta Kavi Narsinh Mehta University and i am currently pursuing my Master’s in Computer Applications (MCA) at Garden City University, Bangalore. I specialize in front-end development, utilizing tools like React, JavaScript, Bootstrap, CSS, HTML, and responsive design. Additionally, I have a foundational understanding of back-end technologies, including Node.js, Express.js, and MongoDB.
                            Alongside my technical skills, I have developed a good communication abilities, making me an effective team player and a confident client liaison. I look forward to applying my skills and growing in dynamic and challenging roles within the tech industry.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe