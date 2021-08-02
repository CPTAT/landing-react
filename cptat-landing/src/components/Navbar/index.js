import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ( {toggle} ) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        {/* <img src="../src/images/logo.png" alt=""></img> */}
                        CPTAT
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">ПРО НАС</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="opportunities">МОЖЛИВОСТІ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="clients">НАШІ КЛІЕНТИ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="algorithm">АЛГОРИТМ РОБОТИ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="examples">ПРИКЛАДИ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team">КОМАНДА</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contacts">КОНТАКТИ</NavLinks>
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
