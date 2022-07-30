import React from "react";
import styled from "styled-components";
import { GomokuTag } from "./GomokuTag";
import { HeaderButton } from "./HeaderButton";

const StyledHeader = styled.div`
    width: 100%;
    height: 15%;
    border: 1px solid purple;
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
        text-decoration: none;
    }
`;

export const Header = ({isLoggedIn, logOut}) => (
        <StyledHeader> 
            <GomokuTag/>
            {isLoggedIn ? 
                <React.Fragment>
                    <HeaderButton text={'Previous Games'} endpoint = {'games'}/>
                    <HeaderButton func = {logOut} text={'Logout'} endpoint = {''}/>
                </React.Fragment> 
                : <HeaderButton text={'Login'} endpoint={'login'}/>}
        </StyledHeader>
    )