import styled from 'styled-components'



export const ExampleContainer = styled.div`

    height: 860px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

`;

export const ExampleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`

export const ExamplesH1 = styled.h1`
    font-size: 2.5rem;
    color: #101606;
    margin-bottom:64px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`