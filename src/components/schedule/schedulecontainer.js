import React, { Component } from 'react';
import { Query } from 'react-apollo';
import classnames from 'classnames';
import {
    Container, Row, Col,
    Card, CardBody, CardHeader, CardTitle
} from 'reactstrap';

import ScheduleItem from './scheduleitem';

class ScheduleContainer extends Component {
    renderScheduleItems(items) {
        var renderedScheduleItems = [];

        for (var i = 0; i < items.length; i++) {
            let item = items[i];
            renderedScheduleItems.push(
                <ScheduleItem title={item.title} dateTime={item.itemStartTime} key={'scheduleItem_' + i} />
            )
        }

        return renderedScheduleItems;
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="my-3 text-center">
                        <h1 className="text-xl">{this.props.title}</h1>
                        <hr className="py-3 w-75"></hr>
                        <div className="card w-75 m-auto">
                            <ul className="list-group list-group-flush">
                                {this.renderScheduleItems(this.props.scheduleItems)}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ScheduleContainer;