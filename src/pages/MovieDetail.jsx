import { useQuery } from "@apollo/client";
import { MOVIE_DETAILS } from '../queries/movieDetailsQuery';

import { useParams } from "react-router-dom";
import ItemDetail from "../containers/item-detail/ItemDetail";


const MovieDetail = () => {
    const {id} = useParams()
    const {loading, error, data} = useQuery(MOVIE_DETAILS, {variables: {id: id}})

    return (
        <ItemDetail
            credits={data?.creditsMovie} 
            details={data?.movieDetails} 
            similar={data?.similarMovie?.results}
        />
    )
}

export default MovieDetail;