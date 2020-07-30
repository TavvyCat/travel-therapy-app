import React, { useState } from 'react';
import { Navbar, NavItem, Nav, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Menu = props => {
    const [showSidebar, setShowSidebar] = useState(false);

    return(
        <Navbar className="sticky-top" color="light" light expand="md">
            <NavLink className="navbar-brand" to="/">PT Travelers</NavLink>
            <NavbarToggler onClick={() => setShowSidebar(!showSidebar)} />
            <Collapse isOpen={showSidebar} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/latest-jobs">Latest Jobs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/search-for-jobs">Search for Jobs</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Menu;