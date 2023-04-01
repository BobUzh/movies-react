import { gql } from "@apollo/client";

export const MOVIE_DETAILS = gql`
    query($id: ID) {
        movieDetails(id: $id) {
            backgroundPath
            genres {
                id
                name
            }
            id
            overview
            posterPath
            releaseDate
            title
            voteAverage
            voteCount
        },
        creditsMovie(id: $id) {
            id
            cast {
            ... on CastPeople {
                id
                name
                cast_id
                character
                profile_path
                known_for_department
            }
            }
        },
        similarMovie(id: $id) {
            results {
                id
                posterPath
            }
        }
    }
`