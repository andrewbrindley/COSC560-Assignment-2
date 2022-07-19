import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import {Header} from './Header';
import {Home} from './Home';
import {Login} from './Login';
import {Game} from './Game';
import '../App.css';


const StyledScreen = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    display: flex;
    flex-direction: column;
    border: 2px solid blue;
`;

const MainScreen = styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid green;
`

const App = () => {

    const [boardSize, updateBoardSize] = useState(null);
    const [loggedIn, updateLoggedIn] = useState(false);
    const [startClicked, updateStartClicked] = useState(false);

    const setBoardSize = (e) => updateBoardSize(e.value);

    const setStartClicked = _ => updateStartClicked(true);

    const login = user => pass => {
        updateLoggedIn(user === pass && pass === 'admin')
    };

    return (
        <StyledScreen>
            <Header/>
            <MainScreen>
                <Routes>
                <Route path="/" element=
                    {
                    <Home
                        boardSize = {boardSize}
                        startClicked = {startClicked}
                        loggedIn = {loggedIn}
                        setStartClicked = {setStartClicked} 
                        setBoardSize={setBoardSize}/>
                    }/>
                    <Route path="/login" element=
                    {
                    <Login login = {login}/>
                    }/>
                    <Route path="/game" element=
                    {
                    <Game/>
                    }/>
                </Routes>
            </MainScreen>
        </StyledScreen>
    )
}

export default App;