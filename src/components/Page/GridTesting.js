import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Accordion, Loader, Content } from '@christfellowshipchurch/flat-ui-web'
import Grid from '../Grid'

const DefaultPage = () => {


  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col>
          <Grid title="This is a Title" body="here you can add body text" backgroundImg="https://data.whicdn.com/images/67020789/original.jpg" backgroundColor="black">
            <Loader.Content />
            <Loader.Content />
            <Loader.Content />
            <Loader.Content />
            <Loader.Content />

          </Grid>
        </Col>
      </Row>
    </Container>
  )
};

DefaultPage.defaultProps = {
};

DefaultPage.propTypes = {
};

export default DefaultPage;
