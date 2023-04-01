import { gql } from "@apollo/client";

export const TVS = gql`
    query($page: Int, $params: [ParamsInput]) {
        tvs(page: $page, params: $params) {
            page
            totalPages
            totalResults
            results {
                id
                title: name
                posterPath
                releaseDate: firstAirDate
                voteAverage
                overview
                genres {
                    name
                }
            }
        },
        tvGenres {
            id
            name
        }
    }
`