import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Menu from './Menu';

const Header = props => (
    <Container>
        <Jumbotron>
            <h1 className="display-4 text-center">Your New Adventure Awaits</h1>
            <h5 className="text-center">We connect you directly to facilities with jobs.</h5>
        </Jumbotron>
        <Menu/>
    </Container>
)

export default Header;