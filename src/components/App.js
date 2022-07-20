import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
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

const STATUS = {
    DRAW: 'DRAW',
}

const App = () => {

    const [boardSize, updateBoardSize] = useState(null);
    const [loggedIn, updateLoggedIn] = useState(false);
    const [startClicked, updateStartClicked] = useState(false);
    const [username, updateUsername] = useState('admin');
    const [password, updatePassword] = useState('admin');
    const [grid, updateGrid] = useState([]);
    const [turn, setTurn] = useState(0);

    useEffect(() => {
        updateGrid([...Array(boardSize * boardSize)].map(_ => -1));
    }, [boardSize]);

    useEffect(() => {
        updateLoggedIn(username === USER && password === PASS); 
    }, [username, password]);

    const nextTurn = () => {
        setTurn(turn => (turn + 1) % 2);
    }

    const tileClicked = (i) => {
        if (grid[i] < 0){
            placeTile(i);
        }
    };

    const placeTile = (i) => {
        updateGrid([...grid].map((v, j) => j !== i ? v : turn));
        nextTurn();
    }

    const setUsername = (e) => {
        updateUsername(e.target.value);
    };

    const setPassword = (e) => {
        updatePassword(e.target.value);
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
                    <Game grid={grid} tileClicked = {tileClicked}/>
                    }/>
                </Routes>
            </MainScreen>
        </StyledScreen>
    )
}

export default App;