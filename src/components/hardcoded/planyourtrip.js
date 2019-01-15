import React, { Component } from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

class PlanYourTrip extends Component {
  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col xs="12" className="text-center">
            <h1 className="text-uppercase font-weight-bold text-danger">
              Plan your Trip
            </h1>
          </Col>
        </Row>
        <Row>
          <div className="text-center col-md col-12 p-3">
            <h1 className="text-xl text-primary"><i className="fas fa-building"></i></h1>
            <h1 className="text-xl">Christ Fellowship Church</h1>
            <a role="button" className="btn btn-outline-success text-success" href="https://www.google.com/maps/place/Christ+Fellowship+Church/@26.8106453,-80.1226515,17z/data=!3m1!4b1!4m5!3m4!1s0x88d92ac0d13189a5:0xfcd08babd72fd4ec!8m2!3d26.8106405!4d-80.1204682" target="_blank">DIRECTIONS</a>
          </div>
          <div className="text-center col-md col-12 p-3">
            <h1 className="text-xl text-primary"><i className="fas fa-building"></i></h1>
            <h1 className="text-xl">Hotels</h1>
            <a role="button" className="btn btn-outline-primary text-primary" href="https://book.passkey.com/event/49596053/owner/3193019/landing" target="_blank">HOTEL SUGGESTIONS</a>
          </div>
          <div className="text-center col-md col-12 p-3">
            <h1 className="text-xl text-success"><i className="fas fa-plane"></i></h1>
            <h1 className="text-xl">Airports</h1>
            <div className="card w-75 m-auto">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <p className="float-left m-0">West Palm Beach</p>
                  <p className="float-right font-weight-bold m-0 text-warning">11.8 mi</p>

                </li>
                <li className="list-group-item">
                  <p className="float-left m-0">Ft. Lauderdale</p>
                  <p className="float-right font-weight-bold m-0 text-warning">51.1 mi</p>

                </li>
                <li className="list-group-item">
                  <p className="float-left m-0">Miami</p>
                  <p className="float-right font-weight-bold m-0 text-warning">77.8 mi</p>

                </li>
                <li className="list-group-item">
                  <p className="float-left m-0">Orlando</p>
                  <p className="float-right font-weight-bold m-0 text-warning">157 mi</p>

                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default PlanYourTrip;