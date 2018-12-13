import gql from 'graphql-tag';

const getBreakoutById = (id) => {
  return gql`
  {
    node(id: "${id}") {
      ... on Group {
        id
        name
        childGroups {
          name
          description
          id
        }
      }
    }
  }
  `;
}

export default getBreakoutById;