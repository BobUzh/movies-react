import { gql } from "@apollo/client";

export const TOP_RATED = gql`
    query {
        movieTopRated {
            results {
                id
                posterPath
            }
        },
        tvTopRated {
            results {
                id
                posterPath
            }
        }
    }
`
// https://image.tmdb.org/t/p/w154/wwemzKWzjKYJFfCeiB57q3r4Bcm.png