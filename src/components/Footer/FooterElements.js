import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #010606;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen ans (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: center;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;

`

export const FooterLinkDescription = styled.h2`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: 0.5px;

    color: #FFFFFF;
`
export const Img = styled.img`
    margin: auto auto;
    width: 80%;
`

export const FooterLinkLogoItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 491px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
}
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #27D184;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
` 

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 40px auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
` 

export const WebsiteRights = styled.small`
    color: #fff;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: centerl
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #27D184;
    font-size: 24px;
    margin-right: 10px;
`

export const Text = styled(Link)`
    text.align: center;
    margin-top: 24px;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
`

export const a = styled(Link)`
    text.align: center;
    margin-top: 24px;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
`

export const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

