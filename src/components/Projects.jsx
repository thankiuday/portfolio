import React from 'react'
import projectDetails from '../Constant/ProjectDetails.js'
import { motion } from 'framer-motion'
const Projects = () => {
    return (
        <div className='border-b border-purple-800 pb-4'>
            <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className='my-20 text-center text-4xl'>Projects</motion.h2>
            <div>
                {projectDetails.map((Projects,index)=>{
                    return(
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <motion.div
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x:-100}}
                            transition={{duration:1}}
                            className='w-full lg:w-1/4'>
                            <img src={Projects.image}
                             alt="Project image"
                             width={150}
                             height={150}
                             className='mb-6 rounded'
                              />
                            </motion.div>
                            <motion.div 
                            whileInView={{opacity:1,x:0}}
                            initial={{opacity:0, x:100}}
                            transition={{duration:1}}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{Projects.title}</h6>
                            <p className='mb-4 text-neutral-300'>{Projects.description}</p>
                            {Projects.technologies.map((tech,index)=>{
                                return(
                                    <span 
    key={index} 
    className='mr-2 rounded bg-neutral-900 px-2 py-1 sm:py-3 text-sm font-medium text-yellow-400 
               [text-shadow:0px_0px_3px_#e6b800, 0px_0px_5px_#e6b800, 0px_0px_8px_#8000ff, 0px_0px_10px_#8000ff]'>
    {tech}
</span>

                                )
                            })}
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects