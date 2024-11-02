import React from 'react'
import { motion } from 'framer-motion'
import image1 from '../assets/projects/project-1.png'
import image2 from '../assets/projects/project-2.png'
import image3 from '../assets/projects/project-3.png'
import image4 from '../assets/projects/project-4.png'
import image5 from '../assets/projects/project-5.png'

const Projects = () => {
    return (
        <div className='border-b border-purple-800 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Projects</motion.h2>
            
            {/* Real-Time Chat Application */}
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/4'>
                    <img src={image1} alt="Real-Time Chat Application" width={150} height={150} className='mb-6 rounded' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Real-Time Chat Application</h6>
                    <p className='mb-4 text-neutral-300'>A chat application that allows real-time communication between users. It features user authentication, and live messaging using Socket.io for seamless interactions.</p>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>MongoDB</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>Express.js</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>React</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>Node.js</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>Socket.io</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>Bootstrap</span>
                </motion.div>
            </div>

            {/* Weather App */}
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/4'>
                    <img src={image2} alt="Weather App" width={150} height={150} className='mb-6 rounded' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Weather App</h6>
                    <p className='mb-4 text-neutral-300'>A web application that provides weather updates based on user location or city input. It fetches real-time data from a weather API, displaying temperature, humidity, and weather conditions in a user-friendly interface.</p>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>React</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>JavaScript</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>CSS</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>HTML5</span>
                </motion.div>
            </div>

            {/* Employee Management System */}
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/4'>
                    <img src={image3} alt="Employee Management System" width={150} height={150} className='mb-6 rounded' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Employee Management System</h6>
                    <p className='mb-4 text-neutral-300'>An employee management system that performs CRUD operations. It features employee data, updating, and deletion. The system includes login authentication and an intuitive dashboard for managing employee records.</p>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>MongoDB</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>Express.js</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>React</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>Node.js</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>Bootstrap</span>
                </motion.div>
            </div>

            {/* Search App */}
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/4'>
                    <img src={image4} alt="Search App" width={150} height={150} className='mb-6 rounded' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Search App</h6>
                    <p className='mb-4 text-neutral-300'>A search application that integrates results from YouTube, blogs, articles, and academic papers. It filters and ranks search results based on relevance, views, and likes to ensure users get the most pertinent content.</p>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>React</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>JavaScript</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>CSS</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>API Integration</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>HTML5</span>
                </motion.div>
            </div>

            {/* Recipe App */}
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/4'>
                    <img src={image5} alt="Recipe App" width={150} height={150} className='mb-6 rounded' />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>Recipe App</h6>
                    <p className='mb-4 text-neutral-300'>An interactive recipe application that provides users with various recipes, ingredients, and cooking steps. It includes search and filter options to help users quickly find desired recipes based on ingredients or cuisine.</p>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>React</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>JavaScript</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>CSS</span>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400'>HTML5</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects
