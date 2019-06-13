import React from 'react'
import classnames from 'classnames'
import { Container, Row, Col } from 'reactstrap'
import {
    pattern, patternLeft, patternRight
} from '../../styles/grid.module.css'

import {
    getTextColorClass
} from '../../utils'


// body is a react component
const Grid = ({ children, title, body, backgroundImg, backgroundColor, backgroundImgReverse = false }) => {

    const backgroundStyle = {
        backgroundColor: backgroundColor,
        position: 'relative',
        overflowX: 'hidden'
    }

    const backgroundClasses = classnames(
        getTextColorClass(backgroundColor)
    )

    const patternStyle = {
        backgroundImage: `url(${backgroundImg})`
    }

    const patternClasses = classnames(
        pattern,
        backgroundImgReverse ? patternRight : patternLeft
    )

    return (
        <Container fluid style={backgroundStyle} className={backgroundClasses}>
            <div style={patternStyle} className={patternClasses}>
            </div>
            <Row className="m-0">
                <Col>
                    <Container className='py-5'>
                        <Row className="mb-5">
                            <Col>
                                <h1 className='text-uppercase'>{title}</h1>
                                <div>
                                    {body}
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            {children.length
                                ? children.map((child) => <Col xs="12" md="6" lg="4" className='p-3 text-center'><div className="bg-white">{child}</div></Col>)
                                : <Col xs="12" md="6" lg="4" className='p-3 text-center'><div className="bg-white">{children}</div></Col>}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Grid;