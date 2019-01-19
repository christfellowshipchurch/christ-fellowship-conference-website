import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Container, Row, Col } from 'reactstrap';

import Callout from '../callout';
import ScheduleContainer from '../schedule/schedulecontainer';

import getSchedule from '../queries/getschedule';
import PreLoader from '../loaders/preloader';
import LoaderError from '../loaders/loadererror';


class Schedule extends Component {
  renderScheduleItems(items) {
    var renderedScheduleItems = []

    for (var i = 0; i < items.length; i++) {
      let item = items[i];
      let scheduleItems = item.childContentItemsConnection.edges.map(c => c.node);
      renderedScheduleItems.push(
        <Col key={'scheduleContainer_' + i}>
          <ScheduleContainer title={item.title} scheduleItems={scheduleItems} />
        </Col>
      )
    }

    return renderedScheduleItems;
  }

  render() {

    return (<Query query={getSchedule} fetchPolicy="cache-and-network">
      {({ loading, error, data }) => {
        if (loading) return <PreLoader />
        if (error) { console.error(error); return <LoaderError />; }

        const schedule = data.node.childContentItemsConnection.edges.map(c => c.node);

        return (
          <Container className="pt-5">
            <Callout title="Schedule">
              <Row>
                {this.renderScheduleItems(schedule)}
              </Row>
            </Callout>
          </Container>
        )
      }}
    </Query>)
  }
}

export default Schedule;