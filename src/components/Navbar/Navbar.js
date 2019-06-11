import React from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink, Button, UncontrolledCollapse } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


// body is a react component
const Navbar = ({ brandImage, quickAction, navLinks }) => {

    const brandStyle = {
        height: '50px',
        width: '50px'
    }

    const navStyle = {
        fontSize: '35px',
        fontFamily: '"Arial Black", sans-serif'
    }



    return (
        <div>
            <Nav vertical className="bg-dark">
            <div className="d-flex bg-dark">
                <div className='py-3 mr-auto ml-3'><img src={brandImage} style={brandStyle} href='#'></img></div>
                {console.log(quickAction)}
                <div>{quickAction.map((link) => <h5 className='py-4 text-white text-uppercase' href={link.action}>{link.call}</h5>)}</div>
                <div className='mr-3'><FontAwesomeIcon id="toggler" icon={faBars} size='5x' color="white" className='px-3 py-4'></FontAwesomeIcon></div>
            </div>
            {console.log(navLinks)}
                <UncontrolledCollapse toggler="#toggler" className='p-5'>
                    {navLinks.map((link) => <NavItem><NavLink style={navStyle} href={link.action} className='text-uppercase text-white'>{link.call}</NavLink></NavItem>)}
                </UncontrolledCollapse>
            </Nav>
        </div>
    )
}
export default Navbar;