import React from 'react'
import {
    Query
} from 'react-apollo'
import {
    get, has, find, first
} from 'lodash'

import getWebsiteHeader from '../../queries/getWebsiteHeader'

import { Nav, NavItem, NavLink, UncontrolledCollapse } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


// body is a react component
const Navbar = () => {
    const website = process.env.REACT_APP_WEBSITE_KEY

    return (
        <Query query={getWebsiteHeader} variables={{ website }} fetchPolicy="cache-and-network">
            {({ loading, error, data }) => {

                if (loading) return <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
                if (error) return <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>

                data = data.getWebsiteNavigation

                const quickAction = {
                    display: has(data, 'quickAction.call') && has(data, 'quickAction.action'),
                    call: get(data, 'quickAction.call', ''),
                    action: get(data, 'quickAction.action', ''),
                }

                const img = find(data.images, (n) => n.name === 'Brand Image')

                return (
                    <div className='fixed-top'>
                        <Nav vertical className="bg-dark">
                            <div className="d-flex bg-dark">
                                {img && get(img, 'sources', null)
                                    ? (
                                        <div className='py-3 ml-3'>
                                            <a href="/">
                                                <img src={get(img, 'sources[0].uri', '')}
                                                    style={{ height: '50px', width: 'auto' }}
                                                    alt="Christ Fellowship Conference" />
                                            </a>
                                        </div>
                                    )
                                    : null}

                                <div className="ml-auto d-flex align-items-center">
                                    {quickAction.display
                                        ? <div>
                                            <h5 className="mb-0">
                                                <NavLink
                                                    href={quickAction.action}
                                                    className='py-4 text-white text-uppercase font-weight-bold'>
                                                    {quickAction.call}
                                                </NavLink>
                                            </h5>
                                        </div>
                                        : null
                                    }
                                    <div className='mr-3'>
                                        <FontAwesomeIcon id="toggler" icon={faBars} size='5x' color="white" className='px-3 py-4'></FontAwesomeIcon>
                                    </div>
                                </div>
                            </div>
                            <UncontrolledCollapse toggler="#toggler" className='p-5'>
                                {data.navigationLinks.map((link) => (
                                    <NavItem>
                                        <h1>
                                            <NavLink href={link.action} className='text-white text-uppercase font-weight-bold'>
                                                {link.call}
                                            </NavLink>
                                        </h1>
                                    </NavItem>
                                ))}
                            </UncontrolledCollapse>
                        </Nav>
                    </div>
                )
            }}
        </Query>
    )
}
export default Navbar;