import { gql } from "@apollo/client";

export const CREDITS = gql`
query ($id: ID) {
    creditsMovie(id: $id) {
        id
        cast {
            id
            name
            cast_id
            character
            profile_path
            known_for_department
        }
    }
 
}
`