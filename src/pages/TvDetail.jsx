import { useQuery } from "@apollo/client";
import { TV_DETAILS } from '../queries/tvDetailsQuery';

import { useParams } from "react-router-dom";
import ItemDetail from "../containers/item-detail/ItemDetail";


const TvDetail = () => {
    const {id} = useParams()
    const {loading, error, data} = useQuery(TV_DETAILS, {variables: {id: id}})

    console.log('castData?.creditsTv11111');
    console.log(data);

    return (
        <ItemDetail 
            credits={data?.creditsTv} 
            details={data?.tvDetails} 
            similar={data?.tvDetails?.seasons}
        />
    )
}

export default TvDetail;