import React from 'react';
import {
    lowerCase
} from 'lodash';

import { Content, Media } from '@christfellowshipchurch/flat-ui-web'
import { Container, Row, Col, Button } from 'reactstrap'

export const mapEdgesToNodes = (data) => data.edges.map(n => n.node);
export const redirectTo = (uri) => window.location.href = uri;


// Content Rendering Utils
export const renderContent = (content) => {
    console.log({ content })


    //Checks for # in hex value for background color
    const hex = content.backgroundColor.substring(0, 1)
    if (hex !== "#") {
        content.backgroundColor = "#" + content.backgroundColor
    }
    const containerStyles = {
        backgroundColor: content.backgroundColor
    }

    if (lowerCase(content.contentLayout) === "background") {
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
        return (
            <Container style={containerStyles} className="py-5" fluid>
                <Container>
                    <Row>
                        <Col >
                            <Content
                                layout={lowerCase(content.contentLayout)}
                                imageUrl={content.coverImage ? content.coverImage.sources[0].uri : null}
                                imageAlt={content.imageAlt}
                                videoUrl={content.videos && content.videos[0].sources.length
                                    ? content.videos[0].sources[0].uri
                                    : null}
                                ratio={content.imageRatio}
                            >
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
                        <Button style={styles}>{n.call}</Button>
                    </Col>
                </Row>
            )
        })}
    </Container>
)