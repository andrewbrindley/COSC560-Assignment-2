import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledHeaderButton = styled.div`
    width: 10%;
    height: 20%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    > Link {
        font-size: 1vw;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
`

export const HeaderButton = ({text, endpoint, func}) => (
    <StyledHeaderButton>
        <Link onClick = {() => func()} style={{ textDecoration: 'none' }} to={`/${endpoint}`}>
                {text}
        </Link>
    </StyledHeaderButton>
)