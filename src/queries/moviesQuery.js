import { gql } from "@apollo/client";



export const MOVIES = gql`
    query($page: Int, $params: [ParamsInput]) {
        movies(page: $page, params: $params) {
            page
            totalPages
            totalResults
            results {
                id
                title
                posterPath
                voteAverage
                releaseDate
                overview
                genres {
                    name
                }
            }
        },
        movieGenres {
            id
            name
        }
    }
`