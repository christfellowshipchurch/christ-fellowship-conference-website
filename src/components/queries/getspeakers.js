import gql from 'graphql-tag';

export default gql`
{
  node(id: "ContentChannel:d57994350b9d213866b24dea3a97433d") {
    ... on ContentChannel {
      id
      name
      childContentItemsConnection {
        edges {
          node {
            ... on ConferenceSpeakerContentItem {
              title
              id
              person {
                firstName
                lastName
                bio
                jobTitle
                facebook
                twitter
                instagram
              }
              images {
                name
                sources {
                  uri
                }
              }
              youTubeId
            }
          }
        }
      }
    }
  }
}
`;