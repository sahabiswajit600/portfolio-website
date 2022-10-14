import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { ChakraProvider, Image, Box } from '@chakra-ui/react'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Biswajit Saha</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <CTA />
                <HeaderSocials />

                {/* <div className="me">
                    <img src={ME} alt="" />
                </div> */}
                <Image className="me"
                    boxSize='200px'
                    src="https://i.ibb.co/cwHqZZV/image.png"
                    alt='Biswajit Saha'
                />

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header