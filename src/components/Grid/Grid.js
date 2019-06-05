import React from 'react'
import { Container, Row, Col } from 'reactstrap'


// title is a react component
const Grid = ({ children, title, body, backgroundImg, backgroundColor, backgroundImgOrientation = 'left' }) => {

    const demoImg = ('https://data.whicdn.com/images/67020789/original.jpg')

    const backgroundStyle = {
        backgroundColor: { backgroundColor }
    }

    const patternStyle = {
        position: 'absolute',
        left: backgroundImgOrientation === 'right' ? '80vw' : '0',
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'repeat-y',
        // backgroundSize: '.',
        width: '20vw',
        height: '100%',
        zIndex: '0'
    }

    const titleStyle = {
        textTransform: 'uppercase',
        marginTop: '70px',
        marginBottom: '0%'
    }

    const bodyStyle = {
        marginBottom: '45px'
    }

    return (
        <Container fluid style={backgroundStyle}>
            <div style={patternStyle}>

            </div>
            <Container>
                <Row>
                    <Col>
                        <h1 style={titleStyle} className='p-2'>{title}</h1>
                        <div style={bodyStyle}>{body}</div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {children.map(child => <Col xs="12" md="4" className='p-3 text-center'><div className="bg-white">{child}</div></Col>)}
                </Row>
            </Container>
        </Container>
    )
}

export default Grid;