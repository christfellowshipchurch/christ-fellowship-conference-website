import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Accordion, Loader, Content } from '@christfellowshipchurch/flat-ui-web'
import Footer from '../Footer'
import Navbar from '../Navbar'

const DefaultPage = () => {
   const demoLinks = [
    {call: 'Privacy Policy',
    action: '/privacypolicy' },
    {call: 'Another Item',
    action: '/anotheritem' },
  ]   

  const demoIcon = 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png'

  return (
    <div>
      <Navbar navLinks={demoLinks} brandImage={demoIcon}></Navbar>

      <Footer linkstoPages={demoLinks} brandIcon={demoIcon}></Footer>
    </div>
  )
};

DefaultPage.defaultProps = {
};

DefaultPage.propTypes = {
};

export default DefaultPage;
