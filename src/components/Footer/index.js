import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FooterContainer, FooterWrap} from './FooterElements'
// import { FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinkDescription, FooterLinkLogoItems} from './FooterElements'
import { SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, Img, a} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkLogoItems>
                        <Img src = './logo.png' />
                        <FooterLinkDescription>
                        Програмно-аналітичний комплекс СРТАТ використовуючи штучний інтелект опрацьовує відео з камер спостереження.  За допомогою даних про трафік обраховуються економічні показники об'єкта та робляться прогнози й рекомендації щодо доречності відкриття закладу в даній локації.
                        </FooterLinkDescription>
                        </FooterLinkLogoItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>НАВІГАЦІЯ</FooterLinkTitle>
                               <FooterLink to="about">ПРО НАС</FooterLink>
                               <FooterLink to="opportunities">МОЖЛИВОСТІ</FooterLink>
                               <FooterLink to="clients">НАШІ КЛІЕНТИ</FooterLink>
                               <FooterLink to="algorithm">АЛГОРИТМ РОБОТИ</FooterLink>
                               <FooterLink to="examples">ПРИКЛАДИ</FooterLink>
                               <FooterLink to="team">КОМАНДА</FooterLink>
                               <FooterLink to="contacts">КОНТАКТИ</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                        <Img src={process.env.PUBLIC_URL + '/logo.png'} />
                        </SocialLogo>
                        <WebsiteRights>
                            CPTAT © {new Date().getFullYear()}  Всі права захищені.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia>
                <a href="mailto:cptat.team@gmail.com" className="mail-link">cptat.team@gmail.com</a>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
