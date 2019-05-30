import React from 'react'
import { Accordion, Loaders, GeneralContent } from '@christfellowshipchurch/flat-ui-web'
import PixelManager from '../PixelManager'

const LoadingPage = () => {

  console.log("Hitting the Loading Page")
  return (
    <React.Fragment>
      <Accordion.Wrapper>
        <Loaders.Standard title="Test 1" />
        <Loaders.GeneralContent title="Test 2" />
        <Loaders.Accordion title="Test 3" />
      </Accordion.Wrapper>

      <PixelManager route="/loading" />

      <GeneralContent.Wrapper
        layout='left'
        ratio='1by1'
        actions={[{ call: 'Test', action: 'https://gochristfellowship.com' }]}
        target='_blank'>
        <GeneralContent.Title>
          Title
        </GeneralContent.Title>

        <GeneralContent.Body>
          Title
        </GeneralContent.Body>
      </GeneralContent.Wrapper>

      <Loaders.Standard />
      <Loaders.GeneralContent />
      <Loaders.Accordion />

    </React.Fragment>
  )
};

LoadingPage.defaultProps = {}

LoadingPage.propTypes = {}

export default LoadingPage
