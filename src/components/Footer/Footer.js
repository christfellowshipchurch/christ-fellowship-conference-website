import React from 'react'
import classnames from 'classnames'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


// body is a react component
const Footer = ({instagramUrl, facebookUrl, twitterUrl, brandIcon}) => {

    const footerLinks = {
        call: 'Privacy Policy',
        action: '/privacypolicy'    
    }

return(
    <Container fluid>
        <Row>
            <Col xs="10" className="bg-dark d-flex align-items-start flex-column p-3 px-5">
                <div>
                    <a href={instagramUrl}><FontAwesomeIcon icon={faInstagram} size='2x'className='mx-2'></FontAwesomeIcon></a>
                    <a href={facebookUrl}><FontAwesomeIcon icon={faTwitter} size='2x'className='mx-2'></FontAwesomeIcon></a>
                    <a href={twitterUrl}><FontAwesomeIcon icon={faFacebook} size='2x'className='mx-2'></FontAwesomeIcon></a>
                </div>
                <p>©2019 Christ Fellowship Church. All Rights Reserved</p>
                <div className='d-flex'>
                {/* {footerLinks.map(child, child => <a href={action}>{call}</a>)} */}
                </div>
                </Col>
            <Col xs="2" className='bg-white'>
                <img alt="brand icon"></img>
            </Col>
        </Row>
    </Container>
)


}

export default Footer;