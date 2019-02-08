import React, { Component } from 'react';

import {
  Container, Row, Col,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faApple, faGooglePlay
} from '@fortawesome/free-brands-svg-icons';

import DownloadButton from '../mobileapp/downloadbutton';

import appIcon from '../../assets/app/icon.png';

class MobileApp extends Component {

  render() {
    return (
      <Container className="mobileApp py-5">
        <Row className="align-items-center">
          <Col xs="12" md="6" className="text-center">
            <img
              src={appIcon}
              alt="Christ Fellowship Conference Mobile App"
              className="w-75" />
          </Col>

          <Col xs="12" md="6" className="text-center">
            <Row>
              <Col>
                <h2>
                  <small className="text-light text-lowercase">
                    {this.props.title || 'Get ready for Conference'}
                  </small>
                  <br></br>
                  <span className="text-danger font-weight-bold text-uppercase">
                    Download the app
                  </span>
                </h2>
                <hr className="w-75"></hr>
              </Col>
              <Col xs="12">
                <p className="text-dark">
                  {this.props.content ||
                    'Check into the conference and your breakouts, view your personalized schedule, navigate around the venue, and more!'}
                </p>
              </Col>
              <Col xs="12" className="py-2">
                <DownloadButton
                  icon={faApple}
                  text="get for iOS"
                  color="success"
                  textColor="white"
                  url="https://itunes.apple.com/us/app/christ-fellowship-conference/id1334944939?mt=8" />
              </Col>
              <Col xs="12" className="py-2 text-center text-md-left">
                <DownloadButton
                  icon={faGooglePlay}
                  text="get for Android"
                  color="warning"
                  text-color="white"
                  url="https://play.google.com/store/apps/details?id=io.echurch.christfellowshipconference&hl=en" />
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default MobileApp;