import React, { Component } from 'react';

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

        <ResourcesCallout />

        <hr className="w-75 my-5"></hr>

        <h1 className="text-center text-warning text-uppercase font-weight-bold">
          Thank You to our wonderful Speakers
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
              uri: "https://rockcon.gocf.org/content/assets/2019/Todd_Julie_CL_FINAL.jpg"
            }]
          }]
        }], 0, 3)}
      </div>
    );
  }
}

export default Recap;