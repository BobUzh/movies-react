import { gql } from "@apollo/client";

export const TV_DETAILS = gql`
    query($id: ID) {
        tvDetails(id: $id) {
            backgroundPath
            id
            overview
            posterPath
            releaseDate
            name
            voteAverage
            voteCount
            seasons {
                id
                air_date
                episode_count
                name
                overview
                posterPath: poster_path
                season_number
            }
        },
        creditsTv(id: $id) {
            id
            cast {
                ... on CastPeople {
                    id
                    name
                    character
                    profile_path
                    known_for_department
                }
            }
        }
    }
`