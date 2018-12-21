import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import logo from '../assets/Logo.png';

{/**
* TODO : pull in all links from a dynamically set/defined data source
*/}

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
                <Navbar className="bg-white shadow-sm" color="light" light fixed="top">
                    <NavbarBrand href="/">
                        <img src={logo} alt="Christ Fellowship Conference Logo" />
                    </NavbarBrand>

                    <a className="btn btn-outline-primary ml-auto mr-3 font-weight-bold" href="https://cftoday.brushfire.com/church-conference/441903">
                        register
                    </a>

                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto mt-2 mt-lg-0 pr-1 text-right" navbar>
                            <NavItem>
                                <Link to={{ pathname: "/" }} className="nav-link">
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={{ pathname: "/breakouts" }} className="nav-link">
                                    Breakouts
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={{ pathname: "/speakers" }} className="nav-link">
                                    Speakers
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={{ pathname: "/2018" }} className="nav-link">
                                    2018 Recap
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        );
    }
}

export default NavigationBar;