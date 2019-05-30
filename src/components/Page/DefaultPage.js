import React from 'react'
import PropTypes from 'prop-types'
import {
  Query
} from 'react-apollo'
import {
  lowerCase
} from 'lodash'

import {
  mapEdgesToNodes
} from '../../utils'
import getWebPageContentIds from '../../queries/getWebPageContentIds'
import getWebPageContentItems from '../../queries/getWebPageContentItems'

import SEO from '../../seo';
import { Accordion, GeneralContent, Loaders } from '@christfellowshipchurch/flat-ui-web'
import PageCallout from './PageCallout'
import PixelManager from '../PixelManager'

const DefaultPage = ({ title, match: { params: { page } } }) => {
  const website = process.env.REACT_APP_WEBSITE_KEY

  PixelManager.initWithPageView(`/${page || ''}`)

  return (
    <Query query={getWebPageContentIds} variables={{ title: page || title, website }} fetchPolicy="cache-and-network">
      {({ loading, error, data }) => {

        if (loading) {
          return (
            <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
              <Loaders.Standard />
            </div>
          )
        }
        if (error) { console.error("ERROR: ", error); return <h1 className="text-center">There was an error loading the page. Please try again.</h1> }

        if (!data.getWebsitePageContentByTitle) window.location.replace("/")

        const nodes = mapEdgesToNodes(data.getWebsitePageContentByTitle.childContentItemsConnection)
        const {
          title: pageTitle,
          metaDescription,
          metaKeywords,
          openGraphProtocols,
          twitterProtocols,
        } = data.getWebsitePageContentByTitle;

        return (
          <React.Fragment>
            <SEO
              title={`${pageTitle} - Christ Fellowship Church`}
              description={metaDescription}
              keywords={metaKeywords}
              openGraphProtocols={openGraphProtocols}
              twitterProtocols={twitterProtocols}
            />

            <Query query={getWebPageContentItems} variables={{ title: page || title, website }} fetchPolicy="cache-and-network">
              {({ loading, error, data: content }) => {
                if (loading) return nodes.map((n, i) => {
                  switch (n.__typename) {
                    case 'WebsiteContentItem':
                      const layout = i % 3 === 0
                        ? 'default'
                        : i % 3 === 1
                          ? 'right'
                          : 'left';
                      return <Loaders.GeneralContent layout={layout} key={i} />
                    case 'WebsiteAccordionContentItem':
                      return <Loaders.Accordion key={i} />
                    default:
                      return <Loaders.GeneralContent layout="default" key={i} />
                  }
                })

                if (error) return <Loaders.ErrorMessage />

                const contentItems = mapEdgesToNodes(content.getWebsitePageContentByTitle.childContentItemsConnection);

                return contentItems.map((item, i) => {
                  switch (item.__typename) {
                    case 'WebsiteContentItem':
                      return (
                        <GeneralContent.Wrapper
                          layout={lowerCase(item.contentLayout)}
                          imageUrl={item.coverImage ? item.coverImage.sources[0].uri : null}
                          imageAlt={item.imageAlt}
                          videoUrl={item.videos && item.videos[0].sources.length
                            ? item.videos[0].sources[0].uri
                            : null}
                          ratio={item.imageRatio}
                          target={item.target}
                          key={i}
                        >

                          <GeneralContent.Title>
                            {item.title}
                          </GeneralContent.Title>

                          <GeneralContent.Body>
                            {item.htmlContent}
                          </GeneralContent.Body>

                          {item.callsToAction.map((n, j) => {
                            const { call, action } = n
                            const onClick = (props) => {
                              // report the button click to the pixels
                              PixelManager.reportButtonClick(props)

                              // redirect to the url provided as 'action'
                              window.location.replace(action)
                            }
                            return <button key={j} className="btn btn-primary" onClick={() => onClick({ call, action, content_id: item.id })}>{call}</button>
                          })}

                        </GeneralContent.Wrapper>
                      );
                    case 'WebsiteAccordionContentItem':
                      const accordionItems = mapEdgesToNodes(item.childContentItemsConnection);
                      return (
                        <Accordion.Wrapper key={i}>
                          {accordionItems.map((accordionItem, j) => {
                            switch (accordionItem.__typename) {
                              case 'WebsiteContentItem':
                                return (
                                  <GeneralContent.Wrapper
                                    title={accordionItem.title}
                                    layout='default'
                                    imageUrl={accordionItem.coverImage ? accordionItem.coverImage.sources[0].uri : null}
                                    imageAlt={accordionItem.imageAlt}
                                    videoUrl={accordionItem.videos && accordionItem.videos[0].sources.length
                                      ? accordionItem.videos[0].sources[0].uri
                                      : null}
                                    ratio={accordionItem.imageRatio}
                                    margin='0'
                                    padding='0'
                                    actions={item.callsToAction}
                                    target={item.target}
                                    key={j}
                                  >
                                    <GeneralContent.Body>
                                      {accordionItem.htmlContent}
                                    </GeneralContent.Body>
                                  </GeneralContent.Wrapper>
                                );
                              default:
                                return (
                                  <div title={accordionItem.title}>
                                    <h2>{accordionItem.title}</h2>
                                    {accordionItem.htmlContent}
                                  </div>
                                )
                            }
                          })}
                        </Accordion.Wrapper>
                      );
                    case 'WebsitePagesContentItem':
                      return (
                        <PageCallout title={item.title} route={lowerCase(item.title).replace(' ', '')} key={i} />
                      );
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
