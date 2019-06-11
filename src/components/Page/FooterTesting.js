import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Accordion, Loader, Content } from '@christfellowshipchurch/flat-ui-web'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Grid from '../Grid'

const DefaultPage = () => {
   const demoLinks = [
    {call: 'Privacy Policy',
    action: '/privacypolicy' },
    {call: 'Another Item',
    action: '/anotheritem' },
  ]   
  const demoRegister = [
    {call: 'Register Now',
    action: '/registration'}
  ]

  const demoIcon = 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png'

  return (
    <div>
      <Navbar navLinks={demoLinks} brandImage={demoIcon} quickAction={demoRegister}></Navbar>
          <Grid title="This is a Title" body={<div>here you can add body text</div>} backgroundImg="https://data.whicdn.com/images/67020789/original.jpg" backgroundColor="white">
            <Loader.Content />
            <Loader.Content />
            <Loader.Content />
            <Loader.Content />
            <Loader.Content />

          </Grid>
      <Footer linkstoPages={demoLinks} brandIcon={demoIcon}></Footer>
    </div>
  )
};

DefaultPage.defaultProps = {
};

DefaultPage.propTypes = {
};

export default DefaultPage;
