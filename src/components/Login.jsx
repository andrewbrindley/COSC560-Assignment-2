import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.div`
    width: 30%;
    height: 40%;
    border: 1px solid black;
    position: relative;
`

const LoginButton = styled.button`
    width: 100%;
    height: 10%;
    text-align: center;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    align-items: center;
    position: absolute;
    bottom: 0;
    > span {
        font-size: 1vw;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
    &: hover{
        cursor: pointer;
    }
`


export const Login = () => (
    <StyledContainer>
        <LoginButton>
            <span>
                Login
            </span>
        </LoginButton>
    </StyledContainer>
)