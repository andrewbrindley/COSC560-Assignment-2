import React from 'react';
import styled from 'styled-components';
import {BoardSize} from './BoardSize';
import { Routes, Route, Link } from "react-router-dom";

const StyledContainer = styled.div`
    width: 30%;
    height: 40%;
    border: 1px solid black;
    position: relative;
`

const StartButton = styled.button`
    width: 100%;
    height: 10%;
    text-align: center;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    align-items: center;
    position: absolute;
    bottom: 0;
    > Link {
        font-size: 1vw;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
    &: hover{
        cursor: pointer;
    }
`


export const Home = ({boardSize, loggedIn, setBoardSize, setStartClicked, startClicked}) => {
    
    return (
        <StyledContainer>
            <BoardSize setBoardSize = {setBoardSize}/>
            <StartButton>
                <Link to={!loggedIn ? '/login' : '/game'}>
                    Start
                </Link>
            </StartButton>
        </StyledContainer>
    )
    }