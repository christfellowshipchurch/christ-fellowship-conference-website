import React from 'react'
import classnames from 'classnames'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


// body is a react component
const Footer = ({ instagramUrl, facebookUrl, twitterUrl, brandIcon, linkstoPages }) => {

    return (
        <Container fluid className='bg-dark'>
            <Row className='m-auto align-items-center'>
                <Col xs="12" md="10" className="text-left py-3">
                    <div>
                        <a href={instagramUrl}><FontAwesomeIcon color='white' icon={faInstagram} size='2x' className='mr-3'></FontAwesomeIcon></a>
                        <a href={facebookUrl}><FontAwesomeIcon color='white' icon={faTwitter} size='2x' className='mr-3'></FontAwesomeIcon></a>
                        <a href={twitterUrl}><FontAwesomeIcon color='white' icon={faFacebook} size='2x' className='mr-3'></FontAwesomeIcon></a>
                    </div>
                    <p className='mb-0 font-weight-light'>&copy;{new Date().getFullYear()} Christ Fellowship Church. All Rights Reserved</p>
                    <div className='d-flex'>
                        {linkstoPages.map((link) => <a href={link.action} className='pr-3 text-white font-weight-bold'>{link.call}</a>)}
                    </div>
                </Col>
                <Col xs="12" md="2" className='py-3'>
                    <a href="/">
                        <img alt="Christ Fellowship Conference" style={{ height: '100px', width: 'auto' }} src={brandIcon} alt="brand icon" className='align-self-center'></img>
                    </a>
                </Col>
            </Row>
        </Container>
    )


}

export default Footer;