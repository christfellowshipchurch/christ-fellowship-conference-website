import React from 'react'
import { Accordion, Loader, Content } from '@christfellowshipchurch/flat-ui-web'

const DefaultPage = () => {

  return (
    <React.Fragment>
      <Accordion>
        <Loader title="Test 1" />
        <Loader.Content title="Test 2" />
        <Loader.Accordion title="Test 3" />
      </Accordion>

      <Content
        layout='left'
        ratio='1by1'
        target='_blank'>
        <Content.Title>
          Title
        </Content.Title>

        <Content.Body>
          Title
        </Content.Body>
      </Content>

      <Loader />
      <Loader.Content />
      <Loader.Accordion />


      {/* <Content
        layout='default'
        imageUrl='https://rock.gocf.org/GetImage.ashx?guid=41d945c3-3dee-4696-88e2-ec25fb681c78'
        ratio='1by1'
      >
        Here's just a random test
      </Content> */}
    </React.Fragment>
  )
  // return (
  //   <React.Fragment>
  //     <Loader.ContentLoader />
  //     <Loader.AccordionLoader />
  //     <Loader.ContentLoader layout="right" />
  //     <Loader.ContentLoader layout="default" />
  //     <Loader.ContentLoader layout="left" />
  //   </React.Fragment>
  // )
};

DefaultPage.defaultProps = {
};

DefaultPage.propTypes = {
};

export default DefaultPage;
