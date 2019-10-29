import gql from 'graphql-tag'

export const GET_BREAKOUT_CATEGORIES = gql`
    query categories {
        getBreakoutCategories {
            id
            values {
                value
            }
        }
    }
`

export const GET_SESSION_BY_CATEGORY = gql`
    query sessionByCategory($category:String!) {
        getBreakoutSessionsByCategory(category:$category) {
            id
            title
            description
            tag
            parent {
                value
            }
        }
    }
`