import { gql } from "@apollo/client";

export const UP_COMMING = gql`
    query {
        comming {
            page
            results {
                id
                title
                posterPath
                backdgroundPath
                voteAverage
                overview
            }
        }
    }
`