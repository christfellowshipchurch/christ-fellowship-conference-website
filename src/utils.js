import React from 'react';
import {
    lowerCase
} from 'lodash';

import { Content, Media } from '@christfellowshipchurch/flat-ui-web'
import { Container, Row, Col, Button } from 'reactstrap'
import PixelManager from './components/PixelManager'


export const mapEdgesToNodes = (data) => data.edges.map(n => n.node);
export const redirectTo = (uri) => window.location.href = uri;


// Content Rendering Utils
export const renderContent = (content) => {

    //Checks for # in hex value for background color
    // const hex = content.backgroundColor.substring(0, 1)
    // if (hex !== "#") {
    //     content.backgroundColor = "#" + content.backgroundColor
    // }
    const containerStyles = {
        backgroundColor: content.backgroundColor
    }

    const layout = lowerCase(content.contentLayout)

    if (layout === "background") {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Media
                            imageUrl={content.coverImage ? content.coverImage.sources[0].uri : null}
                            imageAlt={content.imageAlt}
                            videoUrl={content.videos && content.videos[0].sources.length
                                ? content.videos[0].sources[0].uri
                                : null}
                            ratio={content.imageRatio}
                        >
                            <Content.Title>
                                {content.title}
                            </Content.Title>

                            <Content.Body>
                                {content.htmlContent}
                            </Content.Body>

                            {renderButtons(content.callsToAction)}
                        </Media>
                    </Col>
                </Row>

            </Container>
        )
    } else {
        const imageUrl = content.coverImage && layout !== 'original'
            ? content.coverImage.sources[0].uri
            : null
        const videoUrl = content.videos && content.videos[0].sources.length && layout !== 'original'
            ? content.videos[0].sources[0].uri
            : null

        return (
            <Container style={containerStyles} className="py-5" fluid>
                <Container>
                    <Row>
                        <Col>
                            <Content
                                layout={layout}
                                imageUrl={imageUrl}
                                imageAlt={content.imageAlt}
                                videoUrl={videoUrl}
                                ratio={content.imageRatio}
                            >
                                {layout === 'original'
                                    ? (
                                        <div className="w-100">
                                            <video playsInline autoPlay loop muted className="w-100">
                                                <source type="video/mp4" src={videoUrl} />
                                            </video>

                                            <img src={imageUrl} alt={content.imageAlt} className="w-100" />
                                        </div>
                                    )
                                    : null}

                                <Content.Subtitle className="text-uppercase text-muted font-weight-bold">
                                    {content.subtitle}
                                </Content.Subtitle>

                                <Content.Title className="text-uppercase">
                                    {content.title}
                                </Content.Title>

                                <Content.Body className="pt-5">
                                    {content.htmlContent}
                                </Content.Body>


                                {renderButtons(content.callsToAction, content.buttonColor)}
                            </Content>
                        </Col>
                    </Row>
                </Container>
            </Container>

        )
    }
}

const buttonClick = (call, action) => {
    PixelManager.reportButtonClick({ call, action })
    redirectTo(action)
}

const renderButtons = (callsToAction, buttonColor) => (
    <Container className="px-0">
        {callsToAction.map((n) => {

            //Checks for # in hex value for button color
            const hex = buttonColor.substring(0, 1)
            if (hex !== "#") {
                buttonColor = "#" + buttonColor
            }
            const styles = {
                backgroundColor: buttonColor,
                borderColor: buttonColor
            }

            return (
                <Row className="my-2">
                    <Col size="12">
                        <Button style={styles} onClick={() => buttonClick(n.call, n.action)}>
                            {n.call}
                        </Button>
                    </Col>
                </Row>
            )
        })}
    </Container>
)