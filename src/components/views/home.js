import React, { Component } from 'react';

import HeaderImage from '../headerimage';

import TicketGroup from '../tickets/ticketgroup';

import BannerRow from '../banners/bannerrow';
import BannerImg from '../banners/bannerimg';
import BannerTitles from '../banners/bannertitles';
import BannerContent from '../banners/bannercontent';

import SpeakerList from '../speakers/speakerlist';
import SpeakerApi from '../speakers/speakersapi';

import BreakoutsCallout from '../breakouts/breakoutscallout';

import PlanYourTrip from '../hardcoded/planyourtrip';

class Home extends Component {
  renderBanner = (banners, index, order) => {
    if (index < banners.length) {
      const banner = banners[index];
      const titles = banner.title.toUpperCase().split(".");
      const alignment = order % 2 === 0 ? "left" : "right";

      console.log(banners);

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
      <div className="home">
        <HeaderImage />

        {this.renderBanner(this.props.banners, 1, 0)}

        <h1 className="text-center text-danger text-uppercase font-weight-bold">
          Registration
        </h1>
        <hr className="w-75"></hr>

        <TicketGroup />

        {this.renderBanner(this.props.banners, 2, 1)}

        <BreakoutsCallout />

        {this.renderBanner(this.props.banners, 0, 2)}

        <h1 className="text-center text-danger text-uppercase font-weight-bold">
          Speakers
        </h1>
        <hr className="w-75"></hr>

        <SpeakerList speakers={SpeakerApi.speakers} />

        <h1 className="text-center text-danger text-uppercase font-weight-bold">
          Hosted By
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

        <PlanYourTrip />
      </div>
    );
  }
}

export default Home;