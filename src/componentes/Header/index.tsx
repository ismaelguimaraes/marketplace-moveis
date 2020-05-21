import React, { useState } from 'react';

import { Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { MdPerson, MdShoppingCart } from 'react-icons/md'

import { NavBar, MeuCarrinho, Carrinho, Login } from './styles';

interface Props {

}

const Header: React.FC = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isItemCart, setItemCart] = useState(false);
    // const addCard = () => setItemCart(!isItemCart);

    console.log(isItemCart)
    return (
        <NavBar expand="md">
            <Container>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Login href="/" className="d-flex align-items-center">
                    <MdPerson color="#585858" size={16} />
                    <span>Entrar</span>
                </Login>

                { isItemCart === false ? (
                    <Carrinho className="d-flex align-items-center">
                        <MdShoppingCart size={24} color="#484848" />
                        <MeuCarrinho className="d-flex flex-column">
                            <p>Meu Carrinho</p>
                            <span>0 itens</span>
                        </MeuCarrinho>
                    </Carrinho>
                ) : null }
            </Container>
        </NavBar>
    )
}

export default Header;