import styled from 'styled-components';
import breakpoints from '../../Breakpoints';

export const SideBarMb = styled.div`
    @media ${breakpoints.sm} {
        position: absolute;
        height: 100vh;
        width: 50vw;
        background-color: #ddd;
        z-index: 1001;


        & svg{
        font-size: 3em;
        position: relative;
        top: 0;
        left: 0;
        margin: 10px 0 2em 5px;

        & ul{
            text-decoration: none;
        }
    }

    }

   
`