import { gql } from "@apollo/client";

export const PEOPLE = gql`
    query($id: ID) {
        people(id: $id) {
            biography
            birthday
            gender
            id
            name
            place_of_birth
            popularity
            profilePath: profile_path
            known_for_department
        },
        peopleCreditsMovies(id: $id) {
            id
            cast {
            ... on CastMovie {
                id
                overview
                posterPath: poster_path
                }
            }
        }
    }
`