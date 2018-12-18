import gql from 'graphql-tag';

export default gql`
{
  node(id: "ContentChannel:57c465ee3cd69524d729569b338607de") {
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