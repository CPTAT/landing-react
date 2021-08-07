import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavItem, NavLinks, NavBtn, NavBtnLink, Img} from './NavbarElements';


const Navbar = ( {toggle} ) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <Img src = './logo.png' />
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
                            <NavLinks to="clients">НАШІ КЛІЄНТИ</NavLinks>
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
