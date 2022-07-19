import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import {Header} from './Header';
import {Home} from './Home';
import '../App.css';


const StyledScreen = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    display: flex;
    flex-direction: column;
    border: 2px solid blue;
`

const App = () => {

    const [boardSize, updateBoardSize] = useState(null);

    const setBoardSize = (e) => updateBoardSize(e.value);

    const startClicked = (e) => {
        console.log(boardSize);
    }

    return (
        <StyledScreen>
            <Header/>
            <Routes>
                <Route exact path="/home" element=
                {
                <Home startClicked = {startClicked} 
                      setBoardSize={setBoardSize}/>
                }/>
            </Routes>
        </StyledScreen>
    )
}

export default App;