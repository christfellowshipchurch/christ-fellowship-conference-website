import React, { Component } from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

import mapTitle from '../../assets/map/map-1.jpg';
import map2 from '../../assets/map/map-2.jpg';
import map3 from '../../assets/map/map-3.jpg';
import map4 from '../../assets/map/map-4.jpg';

class Map extends Component {

  render() {

    return (
      <Container className="map">
        <Row>
          <Col xs={{ size: 12, order: 'first' }}>
            <img
              src={mapTitle}
              alt="Christ Fellowship Conference Map Title"
              className="w-100" />
          </Col>
          <hr className="w-75"></hr>
          <Col xs={{ size: 12, order: 1 }} md={{ size: 6, order: 2 }}>
            <img
              src={map2}
              alt="Christ Fellowship Conference Map Life Center"
              className="w-100" />
          </Col>
          <Col xs={{ size: 12, order: 2 }} md={{ size: 6, order: 1 }}>
            <Row>
              <Col xs={{ size: 12, order: 1 }} md={{ size: 12, order: 2 }}>
                <img
                  src={map3}
                  alt="Christ Fellowship Conference Map Main Auditorium"
                  className="w-100" />
              </Col>
              <Col xs={{ size: 12, order: 2 }} md={{ size: 12, order: 1 }}>
                <img
                  src={map4}
                  alt="Christ Fellowship Conference Map South Campus"
                  className="w-100" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Map;