import gql from 'graphql-tag';

export default (id) => gql`
query {
  node(id:"${id}") {
    ... on WebsiteGroupContentItem {
      id
      title
      
      childContentItemsConnection {
        edges {
          node {
            id
            title
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
          }
        }
      }
    }
  }
}
`;
