import gql from 'graphql-tag';

export default gql`
{
  node(id: "ContentChannel:be7381e9c2fea9f41504cd98d4b14321") {
    ... on ContentChannel {
      id
      name
      childContentItemsConnection {
        edges {
          node {
            ... on EventTicketContentItem {
              title
              htmlContent
              ticketPrice
              registration
              color
            }
          }
        }
      }
    }
  }
}
`;