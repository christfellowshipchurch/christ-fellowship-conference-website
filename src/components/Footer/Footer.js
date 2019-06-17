import React from 'react'
import {
    Query
} from 'react-apollo'
import {
    get, has, find
} from 'lodash'

import getWebsiteFooter from '../../queries/getWebsiteFooter'

import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const socialMediaButton = (link, icon) => {
    if (link && link !== '') {
        return (
            <a href={link}>
                <FontAwesomeIcon color='white' icon={icon} size='2x' className='mr-3'></FontAwesomeIcon>
            </a>
        )
    }
}

const Footer = () => {
    const website = process.env.REACT_APP_WEBSITE_KEY

    const footerStyle = {
        backgroundColor:'#1A1818'
    }

    return (
        <Query query={getWebsiteFooter} variables={{ website }} fetchPolicy="cache-and-network">
            {({ loading, error, data }) => {

                if (loading) return <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
                if (error) return <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>

                data = data.getWebsiteNavigation

                const img = find(data.images, (n) => n.name === 'Brand Icon')

                return (
                    <Container fluid className='header-footer-color'>
                        <Row className='m-auto align-items-center'>
                            <Col xs="12" md="10" className="text-left pt-3">
                                <div>
                                    {socialMediaButton(data.instagramUrl, faInstagram)}
                                    {socialMediaButton(data.facebookUrl, faFacebook)}
                                    {socialMediaButton(data.twitterUrl, faTwitter)}
                                </div>

                                <p className='mb-0 font-weight-light text-light'>
                                    &copy; {new Date().getFullYear()} Christ Fellowship Church. All Rights Reserved
                                </p>

                                <div className='d-flex'>
                                    {data.footerLinks.map((link) => (
                                        <a href={link.action} className='pr-3 text-white font-weight-bold'>
                                            {link.call}
                                        </a>
                                    ))}
                                </div>
                            </Col>
                            <Col xs="12" md="2" className='py-3'>
                                {img && get(img, 'sources', null)
                                    ? (
                                        <div className='py-3 ml-3 d-none d-sm-block'>
                                            <a href="/">
                                                <img src={get(img, 'sources[0].uri', '')}
                                                    style={{ height: '50px', width: 'auto' }}
                                                    alt="Christ Fellowship Conference" />
                                            </a>
                                        </div>
                                    )
                                    : null}
                            </Col>
                        </Row>
                    </Container>
                )
            }}
        </Query>
    )
}

export default Footer;