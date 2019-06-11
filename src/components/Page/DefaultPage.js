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
import getGroupContentItems from '../../queries/getGroupContentItems'

import SEO from '../../seo'
import PixelManager from '../PixelManager'

import { Accordion, Carousel, Content, Loader } from '@christfellowshipchurch/flat-ui-web'
import {
  Container, Row, Col
} from 'reactstrap'
import PageCallout from './PageCallout'
import Grid from '../Grid'

const DefaultPage = ({ title, match: { params: { page } } }) => {
  const website = process.env.REACT_APP_WEBSITE_KEY
  let reversePatternSide = false

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
                    case 'WebsiteGroupContentItem':
                      return (
                        <Loader.Content />
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

                const contentItems = mapEdgesToNodes(pageContent.getWebsitePageContentByTitle.childContentItemsConnection)

                return contentItems.map((item, i) => {
                  switch (item.__typename) {
                    case 'WebsiteContentItem':
                      return (
                        <div key={i}>
                          {renderContent(item)}
                        </div>
                      )
                    case 'WebsiteGroupContentItem':
                      if (lowerCase(item.groupLayout) === 'grid') {
                        return (
                          <Query query={getGroupContentItems(item.id)} fetchPolicy="cache-and-network">
                            {({ loading, error, data: groupContent }) => {

                              if (loading) return (
                                <Grid title={item.title} body={item.htmlContent} backgroundImg={item.coverImage} backgroundColor={item.backgroundColor}>
                                  <Loader />
                                </Grid>
                              )
                              if (error) return <h1 className="text-center">There was an error loading the page. Please try again</h1>

                              const groupItems = mapEdgesToNodes(groupContent.node.childContentItemsConnection)

                              reversePatternSide = item.coverImage
                                ? !reversePatternSide
                                : reversePatternSide

                              return (
                                <Grid
                                  title={item.title}
                                  body={item.htmlContent}
                                  backgroundImg={item.coverImage ? item.coverImage.sources[0].uri : null}
                                  backgroundColor={item.backgroundColor}
                                  backgroundImgReverse={reversePatternSide} >
                                  {groupItems.map(groupItem => {
                                    groupItem.contentLayout = "default"
                                    return renderContent(groupItem)
                                  })}
                                </Grid>
                              )
                            }}
                          </Query>
                        )
                      } else if (lowerCase(item.groupLayout) === 'accordion') {
                        return (
                          <Query query={getGroupContentItems(item.id)} fetchPolicy="cache-and-network">
                            {({ loading, error, data: groupContent }) => {

                              if (loading) return <Loader />
                              if (error) return <h1 className="text-center">There was an error loading the page. Please try again</h1>

                              const groupItems = mapEdgesToNodes(groupContent.node.childContentItemsConnection)

                              return (
                                <Container>
                                  <Row>
                                    <Col className="bg-white">
                                      <Accordion key={i}>
                                        {groupItems.map((accordionItem, j) => {
                                          switch (accordionItem.__typename) {
                                            case 'WebsiteContentItem':
                                              return (
                                                <div key={i} title={accordionItem.title}>
                                                  {renderContent(accordionItem)}
                                                </div>
                                              )
                                            default:
                                              return (
                                                <div title={accordionItem.title} key={i}>
                                                  <h2>{accordionItem.title}</h2>
                                                  {accordionItem.htmlContent}
                                                </div>
                                              )
                                          }
                                        })}
                                      </Accordion>
                                    </Col>
                                  </Row>
                                </Container>
                              )
                            }}
                          </Query>

                        )
                      } else if (lowerCase(item.groupLayout) === 'carousel') {
                        return (
                          <Query query={getGroupContentItems(item.id)} fetchPolicy="cache-and-network">
                            {({ loading, error, data: groupContent }) => {

                              if (loading) return <Loader />
                              if (error) return <h1 className="text-center">There was an error loading the page. Please try again</h1>

                              const groupItems = mapEdgesToNodes(groupContent.node.childContentItemsConnection)

                              return (
                                <Container fluid>
                                  <Row>
                                    <Col className="text-center">
                                      <Carousel>
                                        {groupItems.map(groupItem => {
                                          return (
                                            <Container className="my-5">
                                              <Row>
                                                <Col className="text-center" md={{ size: 4, offset: 4 }}>
                                                  <Content
                                                    imageUrl={groupItem.coverImage ? groupItem.coverImage.sources[0].uri : null}
                                                    imageAlt={groupItem.imageAlt}
                                                    ratio='1by1'
                                                    rounded>
                                                    <Content.Body>{groupItem.htmlContent}</Content.Body>
                                                  </Content>
                                                </Col>
                                              </Row>
                                            </Container>
                                          )
                                        })}
                                      </Carousel>
                                    </Col>
                                  </Row>
                                </Container>
                              )
                            }}
                          </Query>
                        )
                      }

                      return <h1 className="text-center">{item.title}</h1>
                    case 'WebsitePagesContentItem':
                      return <PageCallout title={item.title} route={lowerCase(item.title).replace(' ', '')} key={i} />
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
