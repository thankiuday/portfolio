import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const NavBar = () => {
  return (
    <>
      <nav className=' mb-20 flex items-center justify-between py-6 '>
        <div className='flex flex-shrink-0 items-center'>
          <h1 className='text-3xl bg-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 bg-clip-text text-transparent font-bold '>UT</h1>
        </div>
        <div className='flex  items-center justify-center gap-4 text-2xl'>
          <a href='https://www.linkedin.com/in/uday-thanki-b1491a272/' target='_blank'><FaLinkedin /></a>
          <a href='https://github.com/thankiuday' target='_blank'><FaGithub /></a>
          <a href='https://www.instagram.com/udaythankii/'target='_blank'><FaInstagram /></a>
        </div>
      </nav>
    </>
  )
}

export default NavBar