import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavItem, NavLinks, NavBtn, NavBtnLink, Img} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ( {toggle} ) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <Img src = './logo.png' />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"  smooth={true} duration={500} spy={true} offset={-80} exact={true}>ПРО НАС</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="opportunities" smooth={true} duration={500} spy={true} offset={-80} exact={true}>МОЖЛИВОСТІ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="clients" smooth={true} duration={500} spy={true} offset={-80} exact={true}>НАШІ КЛІЄНТИ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="algorithm" smooth={true} duration={500} spy={true} offset={-80} exact={true}>АЛГОРИТМ РОБОТИ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="examples" smooth={true} duration={500} spy={true} offset={-80} exact={true}>ПРИКЛАДИ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team" smooth={true} duration={500} spy={true} offset={-80} exact={true}>КОМАНДА</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contacts" smooth={true} duration={500} spy={true} offset={-80} exact={true}>КОНТАКТИ</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinksLast to="signup">ВХІД У КАБІНЕТ</NavLinksLast>
                        </NavItem> */}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">ВХІД У КАБІНЕТ</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
