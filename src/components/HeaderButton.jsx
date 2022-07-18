import React from 'react';
import styled from 'styled-components';

const StyledHeaderButton = styled.div`
    width: 10%;
    height: 20%;
    border: 1px solid black;
    text-align: center;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    align-items: center;
    > span {
        font-size: 1vw;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
`

export const HeaderButton = ({text}) => (
    <StyledHeaderButton>
        <span>
            {text}
        </span>
    </StyledHeaderButton>
)