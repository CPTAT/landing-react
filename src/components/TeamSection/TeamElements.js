import styled from 'styled-components'

export const TeamContainer = styled.div`
    height: 860px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;

    @media screen and (max-width: 768px) {
        height: 1200px;

    }
    @media screen and (max-width: 575px) {
        height: 1500px;
        
    }
`

export const TeamWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    padding: 0 50px;
    flex-wrap: wrap;

    @media screen and (max-width: 575px) {
        padding: 0 20px;
    }
`

export const TeamCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 340px;
    padding: 20px;
    transition: all 0.2s ease-in-out;
    flex-basis: 19%;
    @media screen and (max-width: 1199px) {
        flex-basis: 33%;
    }
    @media screen and (max-width: 768px) {
        flex-basis: 50%;
    }
    @media screen and (max-width: 575px) {
        flex-basis: 100%;
        padding: 0 20px 20px 20px;
    }
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const TeamIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    border-radius:80px;
`

export const TeamH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom:64px;
    text-align: center;

    @media screen and (max-width: 575px) {
        margin-top: 20px;
        font-size: 2rem;
        
    }
`

export const TeamH2 = styled.h2`
    font-size: 0.8rem;
    margin-bottom: 10px;
    color: #fff;
`

export const TeamP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #fff;
`