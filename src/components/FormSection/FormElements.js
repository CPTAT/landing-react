import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 860px;
    
    // background: linear-gradient(
    //     108deg,
    //     rgba(1, 147, 86, 1) 0%,
    //     rgba(10, 201, 122, 1) 100%
    // );
    background: #27D184;

`;

export const FormWrap = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: 400px) {
            height: 80%;
        }
`;
export const Icon = styled(Link)`
        margin-left: 32px;
        margin-top: 32px;
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        font-size: 32px;

        @media screen and (max-width: 480px) {
            margin-left: 16px;
            margin-top: 8px;
        }
`;

export const FormContent = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 480px) {
            padding: 10px;
            margin-top: 100px;
        }
`;

export const Form = styled.form`
    background: #fff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 20px;
    color: #000;
    font-size: 32px;
    font-weight: 400;
    text-align: center;
`;

export const FormH2 = styled.h2`
    margin-bottom: 20px;
    color: #919AA3;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
    text-align: center;

`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border-color: #27D184;
    border-radius: 4px;
    border-style: solid;
    outline: none;
    
`

export const FormButton = styled.button`
    background: #27D184;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
`