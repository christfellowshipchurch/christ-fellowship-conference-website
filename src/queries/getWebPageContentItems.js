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

          htmlContent

          videos {
            sources {
              uri
            }
          }

          images {
            sources {
              uri
            }
          }

          ... on WebsiteContentItem {
            subtitle

            buttonColor
            
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

          ... on WebsiteGroupContentItem {

            groupLayout
            accordionType
      
          }
        }
      }
    }
  }
}
`;
