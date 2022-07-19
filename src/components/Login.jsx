import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';


const StyledContainer = styled.div`
    width: 30%;
    height: 40%;
    border: 1px solid black;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledInput = styled.input`
    width: 75%;
    height: 10%;
    justify-content: center;
    border: 1px solid black;
    align-items: center;
    margin-top: 10%;
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


export const Login = ({isValidLogin, username, password, setPassword, setUsername}) => {
    return (
        <StyledContainer>
        <StyledInput value = {username} onChange = {setUsername} placeholder={'Username'}/>
        <StyledInput value = {password} onChange = {setPassword} placeholder={'Password'}/>
        <LoginButton>
            <Link to={isValidLogin ? '/' : '/login'}>
                Login
            </Link>
        </LoginButton>
    </StyledContainer>
    )
}