import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : "#010606")};
    height: 860px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
        height:1200px;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    width: 100%;
    height:100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-content: center;
    align-items: center;

`

export const InfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    // margin-top: 100px;
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    flex-basis: 50%;
    margin-top: 100px;
    @media screen and (max-width: 768px) {
        flex-basis: 100%;
    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    flex-basis: 50%;
    margin-top: 100px;
    @media screen and (max-width: 768px) {
        flex-basis: 100%;
        margin-top: 0px;
    }
`

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TopLine = styled.p`
    color: #27D184;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
    
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    text-align: center;
    span {
        color: #27D184;
       }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: ${({darkText}) => (darkText ? '#010606' : "#fff")};
    margin-left: auto;
    margin-right: auto;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center; 
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%; 
`

export const Img =styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const ClientIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`

export const ClientH1 = styled.h1`
    flex-basis: 100%;
    padding-top: 20px;
    margin-bottom: 20px;
    font-size: 2.5rem;
    color: #000;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`