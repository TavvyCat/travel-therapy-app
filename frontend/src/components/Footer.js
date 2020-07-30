import React from 'react';
import { Container } from 'reactstrap';

const Footer = props => (
    <Container>
        <footer className="align-bottom bg-dark py-4">
            <div className="text-center center-block">
                <a href="/"><i id="social-fb" className="fa fa-facebook-square fa-3x px-2"></i></a>
                <a href="/"><i id="social-tw" className="fa fa-twitter-square fa-3x px-2"></i></a>
                <a href="/"><i id="social-em" className="fa fa-envelope-square fa-3x px-2"></i></a>
            </div>
        </footer>
    </Container>
)

export default Footer;