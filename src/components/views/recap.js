import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Container, Row, Col
} from 'reactstrap';

import HeaderVideo from '../headers/headervideo';

import TicketGroup from '../tickets/ticketgroup';

import BannerRow from '../banners/bannerrow';
import BannerImg from '../banners/bannerimg';
import BannerTitles from '../banners/bannertitles';
import BannerContent from '../banners/bannercontent';

import SpeakerList from '../speakers/speakerlist';
import SpeakerApi from '../speakers/speakersapi';

import BreakoutsCallout from '../breakouts/breakoutscallout';
import ResourcesCallout from '../resources/resourcescallout';

class Recap extends Component {
  renderBanner = (banners, index, order) => {
    if (banners && index < banners.length) {
      const banner = banners[index];
      const titles = banner.title.toUpperCase().split(".");
      const alignment = order % 2 === 0 ? "left" : "right";
      const img = banner.images ? banner.images[0].sources[0].uri : '';

      return (
        <BannerRow color="primary" className="mt-0">
          <BannerImg align={alignment} img={img} />
          <BannerTitles titles={titles} />
          <BannerContent>
            {banner.htmlContent}
          </BannerContent>
        </BannerRow>
      );
    }
  }

  render() {


    return (
      <div className="recap">
        <HeaderVideo />

        <Container>
          <Row>
            <Col xs="12">
              <h1 className="text-center text-primary text-uppercase font-weight-bold">
                Register for Next Year
              </h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className="text-center">
                Registration for Christ Fellowship Conference in 2020 is available now.
              </h3>
            </Col>
          </Row>

          <Row>
            <Col xs={{ size: 6, offset: 3 }} class="text-center">
              <a
                href='https://cftoday.brushfire.com/church-conference/451932'
                target="_blank"
                className="btn btn-primary font-weight-bold text-uppercase text-white w-100">
                REGISTER NOW
              </a>
            </Col>
          </Row>
        </Container>

        <hr className="w-75"></hr>

        <ResourcesCallout />
        <Container>
          <Row>
            <Col xs={{ size: 6, offset: 3 }} class="text-center">
              <Link
                to={{
                  pathname: "/speakers"
                }} className="btn btn-warning font-weight-bold text-uppercase text-white w-100">
                General Session Videos
              </Link>
            </Col>
          </Row>
        </Container>

        <hr className="w-75 my-5"></hr>

        <h1 className="text-center text-warning text-uppercase font-weight-bold">
          Thank You to our wonderful Speakers
          <br></br>
          <small class="text-lowercase text-dark">
            Check Out Their Bios Below to Watch Their General Session Messages
          </small>
        </h1>

        <SpeakerList speakers={SpeakerApi.speakers} not={['toddmullins', 'juliemullins']} />

        <hr className="w-75 my-5"></hr>

        <h1 className="text-center text-success text-uppercase font-weight-bold mb-5">
          Thank You to our incredible Hosts
        </h1>
        {this.renderBanner([{
          title: "Todd & Julie Mullins.Senior Pastors of Christ Fellowship Church",
          htmlContent: "Todd and Julie Mullins are the Co-Senior Pastors of Christ Fellowship Church, on the lead team of the “Association of Related Churches” (ARC), and founders of Church United. Learn from them as they share from their ministry experiences",
          images: [{
            sources: [{
              uri: "https://rock.christfellowshipconference.com/content/assets/2019/Todd_Julie_CL_FINAL.jpg"
            }]
          }]
        }], 0, 3)}
      </div>
    );
  }
}

export default Recap;