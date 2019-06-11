import React from 'react'
import classnames from 'classnames'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


// body is a react component
const Footer = ({instagramUrl, facebookUrl, twitterUrl, brandIcon, linkstoPages}) => {

return(
    <Container fluid className='bg-dark'>
        <Row className='m-auto'>
            <Col xs="10" className="d-flex align-items-start flex-column p-3 px-5">
                <div>
                    <a href={instagramUrl}><FontAwesomeIcon color='white' icon={faInstagram} size='2x'className='mr-3'></FontAwesomeIcon></a>
                    <a href={facebookUrl}><FontAwesomeIcon color='white' icon={faTwitter} size='2x'className='mr-3'></FontAwesomeIcon></a>
                    <a href={twitterUrl}><FontAwesomeIcon color='white' icon={faFacebook} size='2x'className='mr-3'></FontAwesomeIcon></a>
                </div>
                <p className='mb-0 font-weight-light'>©2019 Christ Fellowship Church. All Rights Reserved</p>
                <div className='d-flex'>
                {linkstoPages.map((link) => <a href={link.action} className='pr-3 text-white font-weight-bold'>{link.call}</a>)}
                </div>
                </Col>
            <Col xs="2" className='d-flex justify-content-center' >
                <img style={{height:'100px', width:'100px'}} src={brandIcon} alt="brand icon" className='align-self-center'></img>
            </Col>
        </Row>
    </Container>
)


}

export default Footer;