import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"
import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6"
import logo from "../assets/SD_logo.png"

const Navbar = () => {
  return (
   <nav className="flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label='Home'>
            <img src={logo} className="mx-2" width={50} height={33} alt='Logo' />
         </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/paidakula-sai-deepak-1b64a5287/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkdeIn'>
            <FaLinkedin />
        </a>

        <a href="https://github.com/deepakpatel45"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub'>
            <FaGithub />
        </a>

        <a href="https://www.instagram.com/deepak.patel_45?igsh=cm90b2FlMTNjYnVv"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Instagram'>
            <FaInstagram />
        </a>

        <a href="https://x.com/Deepakpatel9124?t=SJRLiAODDifNkh9ZYtUzbw&s=09"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Twitter'>
            <FaSquareXTwitter />
        </a>
        

    </div>

   </nav>
  )
}

export default Navbar