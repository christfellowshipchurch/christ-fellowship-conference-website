import React, { Component } from 'react';
import {
    Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
}                           from 'reactstrap';
import logo                 from '../assets/Logo.png';

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
            <header className="App-header">
                <Navbar className="bg-white" color="light" light fixed="top">
                    <NavbarBrand href="/">
                        <img src={logo} />
                    </NavbarBrand>

                    <a className="btn btn-outline-primary ml-auto mr-3 font-weight-bold" href="https://cftoday.brushfire.com/church-conference/441903">
                        register
                    </a>

                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto mt-2 mt-lg-0 pr-1 text-right" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">2018 Recap</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

export default NavigationBar;