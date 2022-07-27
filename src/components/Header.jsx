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
`

export const Header = ({isLoggedIn}) => (
        <StyledHeader> 
            <GomokuTag/>
            <HeaderButton text={'Login'} endpoint={'login'}/>
            <HeaderButton text={'Previous Games'} endpoint = {'games'}/>
        </StyledHeader>
    )