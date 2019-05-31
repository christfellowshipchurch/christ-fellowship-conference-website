import gql from 'graphql-tag';

export default gql`
  query getWebsitePages($website:String!, $title:String!) {
    getWebsitePageContentByTitle(website:$website, title:$title) {
      id
      title

      childContentItemsConnection {
        edges {
          node {
            id
            title

            videos {
              sources {
                uri
              }
            }

            ... on WebsiteContentItem {
              subtitle
              buttonColor
              backgroundColor
              htmlContent
              
              contentLayout
              callsToAction {
                call
                action
              }
              target
      
              coverImage {
                name
                sources {
                  uri
                }
              }
              imageAlt
              imageRatio
            }

          }
        }
      }
    }
  }
`;
