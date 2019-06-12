import React from 'react'
import { Accordion, Loader, Content } from '@christfellowshipchurch/flat-ui-web'

import {
  Carousel, CarouselItem, CarouselIndicators
} from 'reactstrap'

import Hero from '../Hero'

const DefaultPage = () => {

  return (
    <React.Fragment>
      <Hero />


    </React.Fragment>
  )
};

DefaultPage.defaultProps = {
};

DefaultPage.propTypes = {
};

export default DefaultPage;
