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
`;

const USER = 'admin';
const PASS = 'admin';

const App = () => {

    const [boardSize, updateBoardSize] = useState(null);
    const [loggedIn, updateLoggedIn] = useState(false);
    const [startClicked, updateStartClicked] = useState(false);
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');


    useEffect(() => {
        updateLoggedIn(username === USER && password === PASS); 
    }, [username, password])

    const setUsername = (e) => {
        updateUsername(e.target.value)
    };

    const setPassword = (e) => {
        updatePassword(e.target.value)
    };

    const setBoardSize = (e) => updateBoardSize(e.value);

    const setStartClicked = _ => updateStartClicked(true);

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
                    <Login
                        isValidLogin = {loggedIn}
                        password = {password}
                        username = {username}
                        setPassword = {setPassword}
                        setUsername = {setUsername}
                        />
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