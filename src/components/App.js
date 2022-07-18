import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Header} from './Header';
import {Home} from './Home';
import {BoardSize} from './BoardSize';
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
    return (
        <StyledScreen>
            <Header/>
            <Home/>
        </StyledScreen>
    )
}

export default App;