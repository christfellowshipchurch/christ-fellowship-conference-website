import React from 'react'
import classnames from 'classnames'
import { Container, Row, Col, Nav, NavItem, NavLink, Button, UncontrolledCollapse } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


// body is a react component
const Navbar = ({ brandImage, quickAction, navLinks }) => {

    const brandStyle = {
        height: '50px',
        width: '50px'
    }

    return (
        <div>
            <Nav vertical className="navbar navbar-expand-md bg-dark navbar-dark">
                <NavItem className="d-flex justify-content-around">
                    <img className='p-2' src={brandImage} style={brandStyle} href='#'></img>
                    <h3 className='p-2 text-white'> Register Now</h3>
                    <FontAwesomeIcon id="toggler" icon={faBars} size='3x' color="white" className='p-2'></FontAwesomeIcon>
                </NavItem>
                <UncontrolledCollapse toggler="#toggler">
                    <NavItem>
                        <NavLink href='#'>
                            This is a link item
                        </NavLink>
                    </NavItem>
                        {navLinks.map((link) => <NavItem><NavLink href={link.action}>{link.call}</NavLink></NavItem>)}
                </UncontrolledCollapse>
            </Nav>
        </div>
    )
}
export default Navbar;