import React from 'react'
import { Nav, NavItem, NavLink, UncontrolledCollapse } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


// body is a react component
const Navbar = ({ brandImage, quickAction, navLinks }) => {



    return (
        <div className='fixed-top'>
            <Nav vertical className="bg-dark">
                <div className="d-flex bg-dark">
                    <div className='py-3 mr-auto ml-3'>
                        <a href="/">
                            <img src={brandImage} style={{ height: '50px', width: '50px' }} href='#' alt="Christ Fellowship Conference" />
                        </a>
                    </div>
                    <div>
                        {quickAction.map((link) => (
                            <h5>
                                <NavLink
                                    href={link.action}
                                    className='py-4 text-white text-uppercase font-weight-bold'>
                                    {link.call}
                                </NavLink>
                            </h5>
                        ))}
                    </div>
                    <div className='mr-3'>
                        <FontAwesomeIcon id="toggler" icon={faBars} size='5x' color="white" className='px-3 py-4'></FontAwesomeIcon>
                    </div>
                </div>
                <UncontrolledCollapse toggler="#toggler" className='p-5'>
                    {navLinks.map((link) => <NavItem><h1><NavLink href={link.action} className='text-white text-uppercase font-weight-bold'>{link.call}</NavLink></h1></NavItem>)}
                </UncontrolledCollapse>
            </Nav>
        </div>
    )
}
export default Navbar;