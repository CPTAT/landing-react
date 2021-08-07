import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        ПРО НАС
                    </SidebarLink>
                    <SidebarLink to='opportunities' onClick={toggle}>МОЖЛИВОСТІ</SidebarLink>
                    <SidebarLink to='clients' onClick={toggle}>НАШІ КЛІЄНТИ</SidebarLink>
                    <SidebarLink to='algorithm' onClick={toggle}>АЛГОРИТМ РОБОТИ</SidebarLink>
                    <SidebarLink to='examples' onClick={toggle}>ПРИКЛАДИ</SidebarLink>
                    <SidebarLink to='team' onClick={toggle}>КОМАНДА</SidebarLink>
                    <SidebarLink to='contacts' onClick={toggle}>КОНТАКТИ</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        ВХІД У КАБІНЕТ
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
