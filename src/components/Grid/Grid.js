import React from 'react'
import classnames from 'classnames'
import { Container, Row, Col } from 'reactstrap'
import {
    pattern, patternLeft, patternRight
} from '../../styles/grid.module.css'


// body is a react component
const Grid = ({ children, title, body, backgroundImg, backgroundColor, backgroundImgOrientation = 'left' }) => {

    const backgroundStyle = {
        backgroundColor: backgroundColor
    }

    const patternStyle = {
        backgroundImage: `url(${backgroundImg})`
    }

    const patternClasses = classnames(
        pattern,
        backgroundImgOrientation === 'right' ? patternRight : patternLeft
    )

    return (
        <Container fluid style={backgroundStyle}>
            <div style={patternStyle} className={patternClasses}></div>
            <Container className='py-5'>
                <Row className="mb-5">
                    <Col>
                        <h1 className='text-uppercase'>{title}</h1>
                        {body}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {children.length
                        ? children.map((child) => <Col xs="12" md="4" className='p-3 text-center'><div className="bg-white">{child}</div></Col>)
                        : <Col xs="12" md="4" className='p-3 text-center'><div className="bg-white">{children}</div></Col>}
                </Row>
            </Container>
        </Container>
    )
}

export default Grid;