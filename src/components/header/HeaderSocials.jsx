import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/sahabiswajit600/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/sahabiswajit600" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://dribbble.com/sahabiswajit600" target="_blank" rel="noopener noreferrer"><FiDribbble /></a>
            <a href="https://www.facebook.com/sahabiswajit600" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            <a href="https://www.instagram.com/sahabiswajit600/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
        </div>
    )
}

export default HeaderSocials