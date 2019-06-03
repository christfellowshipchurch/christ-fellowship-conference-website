import React from 'react'
import PropTypes from 'prop-types'
import {
  Query
} from 'react-apollo'
import {
  lowerCase
} from 'lodash'

import {
  mapEdgesToNodes, renderContent
} from '../../utils'
import getWebPageContentIds from '../../queries/getWebPageContentIds'
import getWebPageContentItems from '../../queries/getWebPageContentItems'

import SEO from '../../seo'
import PixelManager from '../PixelManager'

import { Accordion, Content, Loader } from '@christfellowshipchurch/flat-ui-web'
import {
  Container, Row, Col
} from 'reactstrap'
import PageCallout from './PageCallout'

const DefaultPage = ({ title, match: { params: { page } } }) => {
  const website = process.env.REACT_APP_WEBSITE_KEY

  PixelManager.initWithPageView(`/${page || ''}`)

  return (
    <Query query={getWebPageContentIds} variables={{ title: page || title, website }} fetchPolicy="cache-and-network">
      {({ loading, error, data }) => {

        if (loading) {
          return (
            <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
              <Loader />
            </div>
          )
        }
        if (error) { console.error("ERROR: ", error); return <h1 className="text-center">There was an error loading the page. Please try again.</h1> }

        if (!data.getWebsitePageContentByTitle) window.location.replace("/")

        const nodes = mapEdgesToNodes(data.getWebsitePageContentByTitle.childContentItemsConnection)
        const {
          title,
          metaDescription,
          metaKeywords,
          openGraphProtocols,
          twitterProtocols,
        } = data.getWebsitePageContentByTitle;

        const pageTitle = page || title

        return (
          <React.Fragment>
            <SEO
              title={`${pageTitle} - Christ Fellowship Church`}
              description={metaDescription}
              keywords={metaKeywords}
              openGraphProtocols={openGraphProtocols}
              twitterProtocols={twitterProtocols}
            />

            <Query query={getWebPageContentItems} variables={{ title: pageTitle, website }} fetchPolicy="cache-and-network">
              {({ loading, error, data: pageContent }) => {

                if (loading) return nodes.map((n, i) => {
                  switch (n.__typename) {
                    case 'WebsiteContentItem':
                      const layout = i % 3 === 0
                        ? 'default'
                        : i % 3 === 1
                          ? 'right'
                          : 'left';
                      return (
                        <Container layout={layout} key={i} >
                          <Row>
                            <Col>
                              <Loader.Content layout={layout} key={i} />
                            </Col>
                          </Row>
                        </Container>
                      )
                    case 'WebsiteAccordionContentItem':
                      return (
                        <Container key={i} >
                          <Row>
                            <Col>
                              <Loader.Accordion key={i} />
                            </Col>
                          </Row>
                        </Container>
                      )
                    default:
                      return (
                        <Container layout="default" key={i}>
                          <Row>
                            <Col>
                              <Loader.Content layout="default" key={i} />
                            </Col>
                          </Row>
                        </Container>
                      )
                  }
                })

                if (error) return <h1 className="text-center">There was an error loading the page. Please try again</h1>

                const contentItems = mapEdgesToNodes(pageContent.getWebsitePageContentByTitle.childContentItemsConnection);

                return contentItems.map((item, i) => {
                  switch (item.__typename) {
                    case 'WebsiteContentItem':
                      return (
                        <div key={i}>
                          {renderContent(item)}
                        </div>
                      )
                    // case 'WebsitePagesContentItem':
                    //   // TODO : Caleb to update
                    //   return (
                    //     <PageCallout title={item.title} route={lowerCase(item.title).replace(' ', '')} key={i} />
                    //   );
                    default:
                      return <h1 className="text-center" key={i}>{item.title}</h1>
                  }
                })
              }}
            </Query>

          </React.Fragment>
        )
      }}
    </Query>
  );
};

DefaultPage.defaultProps = {
  title: 'home',
};

DefaultPage.propTypes = {
  title: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string
    })
  })
};

export default DefaultPage;
