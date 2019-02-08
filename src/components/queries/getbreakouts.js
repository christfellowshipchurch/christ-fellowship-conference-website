import gql from 'graphql-tag';

const getBreakoutById = (id) => {
  return gql`
  {
    node(id: "${id}") {
      ... on Group {
        id
        name

        image {
          sources {
            uri
          }
        }

        childGroups {
          name
          description
          id

          slideshowPresentation
          audioRecording
          additionalResources
          
          image {
            sources {
              uri
            }
          }
        }
      }
    }
  }
  `;
}

export default getBreakoutById;