import gql from 'graphql-tag';

export default gql`
{
  node(id: "ContentChannel:be35f49307d7297989d3514be788ef2d") {
    ... on ContentChannel {
      id
      name
      childContentItemsConnection {
        edges {
          node {
              id
              title
            
            childContentItemsConnection {
              edges {
                node {
                  ... on ConferenceScheduleContentItem {
                    id
                    title
                    
                    itemStartTime
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;