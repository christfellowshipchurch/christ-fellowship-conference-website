import React from 'react'
import classnames from 'classnames'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


// body is a react component
const Footer = ({instagramUrl, facebookUrl, twitterUrl, brandIcon, linkstoPages}) => {

const brandStyle = {
    height: '100px',
    width: '100px'
}

return(
    <Container fluid className='bg-dark'>
        <Row className='m-auto'>
            <Col xs="10" className="d-flex align-items-start flex-column p-3 px-5">
                <div>
                    <a href={instagramUrl}><FontAwesomeIcon icon={faInstagram} size='2x'className='mx-2'></FontAwesomeIcon></a>
                    <a href={facebookUrl}><FontAwesomeIcon icon={faTwitter} size='2x'className='mx-2'></FontAwesomeIcon></a>
                    <a href={twitterUrl}><FontAwesomeIcon icon={faFacebook} size='2x'className='mx-2'></FontAwesomeIcon></a>
                </div>
                <p>©2019 Christ Fellowship Church. All Rights Reserved</p>
                <div className='d-flex'>
                {linkstoPages.map((link) => <a href={link.action} className='px-2 text-white'>{link.call}</a>)}
                </div>
                </Col>
            <Col xs="2" className='d-flex justify-content-center' >
                <img style={brandStyle} src={brandIcon} alt="brand icon" className='align-self-center'></img>
            </Col>
        </Row>
    </Container>
)


}

export default Footer;