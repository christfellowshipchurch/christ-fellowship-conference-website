import React, { Component } from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

class Recap2018 extends Component {
  render() {
    return (
      <div>
        <Container fluid className="banner-img p-0">
          <Row className="m-0 w-100 h-100">
            <Col className="overlay p-0">

            </Col>
          </Row>
        </Container>
        <div className="container-fluid mt-4">
          <Row>
            <Col xs="12">
              <h1 className="text-danger text-center">
                Relive Christ Fellowship Conference 2018 </h1>
            </Col>
          </Row>
          <div className="row">
            <div className="col text-center">
              <h2 className="text-primary">
                Resources </h2>
              <a className="btn btn-outline-secondary" href="https://www.dropbox.com/sh/e5oamdyqqjy9jo8/AACCAim-zwe4Idw9_uICilLBa?dl=0" target="_blank">RESOURCES</a>
            </div>
          </div>
          <hr className="w-75"></hr>
          <div className="row">
            <div className="col">
              <h1 className="text-center text-primary">Pastor Chris Hodges</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 p-3 text-center">
              <h3 className="text-uppercase font-weight-light">
                Wednesday Night </h3>
              <iframe src="https://www.youtube.com/embed/YRLYtjjfUxI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="col-12 col-md-6 p-3 text-center">
              <h3 className="text-uppercase font-weight-light">Thursday Morning</h3>
              <iframe src="https://www.youtube.com/embed/Iu2RW2zH75g" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <hr className="w-75"></hr>
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-12 col-md-6 p-3 text-center">
              <h1 className="text-primary">Pastor Rich Wilkerson Jr.</h1>
              <iframe src="https://www.youtube.com/embed/pdZjLRrh1qo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="col-12 col-md-6 p-3 text-center">
              <h1 className="text-primary">Pastor Todd Mullins</h1>
              <iframe src="https://www.youtube.com/embed/Sthh65KseqA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <hr className="w-75"></hr>
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col">
              <h1 className="text-center text-primary">
                Afternoon Sessions</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 p-3 text-center">
              <h3 className="text-uppercase font-weight-light text-dark">Wednesday</h3>
              <iframe src="https://www.youtube.com/embed/5BZyIDREiIo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="col-12 col-md-6 p-3 text-center">
              <h3 className="text-dark font-weight-light text-uppercase">Thursday</h3>
              <iframe src="https://www.youtube.com/embed/vu9Gs2Mxkzg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recap2018;