import gql from 'graphql-tag';

export default gql`
{
  node(id: "ContentChannel:08237d50bcc7ca4f21a9c9aa815c35ff") {
    ... on ContentChannel {
      id
      name
      childContentItemsConnection {
        edges {
          node {
            title
            htmlContent
            images {
              name
              sources {
                uri
              }
            }
          }
        }
      }
    }
  }
}
`;