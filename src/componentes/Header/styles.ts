import styled from 'styled-components';
import { darken } from 'polished';

import { Navbar } from 'reactstrap';

export const NavBar = styled(Navbar)`
    height: 86px;
    font-family: 'Open Sans', sans-serif;
    background-color: #FFFFFF;
    color: #484848;
    box-shadow: 0 4px 2px -3.5px rgba(0,0,0,0.2);
`

export const Login = styled.button`
    color: #686868;
    transition: all 0.4s ease;
    background: none;
    border: 0;
    outline: 0;

    &:hover, &:focus {
        color: ${darken(0.10, '#686868')};
        text-decoration: none;
        outline: 0;
    }
    
    span {
        font-size: 12px;
        font-weight: 600;
        margin-left: 4px;
    }
`;

export const Carrinho = styled.div`
    margin-left: 16px;
`;

export const MeuCarrinho = styled.div`
    margin-left: 8px;

    p {
        margin: 0;
        margin-bottom: -3px;
        font-size: 10px;
        font-weight: 600;
    }

    span {
        font-size: 10px;
    }
`;