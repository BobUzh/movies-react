import { gql } from "@apollo/client";

export const POPULAR = gql`
    query {
        moviePopular {
            results {
                id
                posterPath
            }
        },
        tvPopular {
            results {
                id
                posterPath
            }
        }
    }
`
// https://image.tmdb.org/t/p/w154/wwemzKWzjKYJFfCeiB57q3r4Bcm.png