import React, { Component } from 'react';

import HeaderImage from '../headerimage';

import TicketGroup from '../tickets/ticketgroup';

import BannerRow from '../banners/bannerrow';
import BannerImg from '../banners/bannerimg';
import BannerTitles from '../banners/bannertitles';
import BannerContent from '../banners/bannercontent';

import SpeakerList from '../speakers/speakerlist';
import SpeakerApi from '../speakers/speakersapi';

class Home extends Component {
  renderBanner = (banners, index) => {
    if (index < banners.length) {
      const banner = banners[index];
      const titles = banner.title.toUpperCase().split(".");
      const alignment = index % 2 === 0 ? "left" : "right";

      return (
        <BannerRow color="primary" className="mt-0">
          <BannerImg align={alignment} />
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
      <div className="home">
        <HeaderImage />

        {this.renderBanner(this.props.banners, 0)}

        <h1 className="text-center text-danger text-uppercase font-weight-bold">
          Registration
        </h1>
        <TicketGroup />

        {this.renderBanner(this.props.banners, 1)}

        <h1 className="text-center text-danger text-uppercase font-weight-bold">
          Speakers
        </h1>
        <SpeakerList speakers={SpeakerApi.speakers} />
      </div>
    );
  }
}

export default Home;