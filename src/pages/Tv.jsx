import { useQuery } from "@apollo/client";
import { TVS } from "../queries/tvsQuery";

import ItemList from "../containers/item-list/ItemList";
import Filter from "../containers/Filter"
import { useState } from "react";
import { Container, Pagination, Stack } from "@mui/material";

const Tv = () => {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState([]);
    const {loading, error, data} = useQuery(TVS,  {variables: { page: page, params: filter}});

    const handlePaginate = (e, value) => setPage(value);

    const changeFilter = (value, name) => {
        let _filter = filter.filter(f => f.name != name);
        let options = {name, value};
        setFilter([..._filter, options]);
        setPage(1);
    }

    return (
        <Container maxWidth='xl'>
            <Filter genres={data?.tvGenres} changeFilter={changeFilter}/>
            {loading && <h1>Loading...</h1>}
            <ItemList list={data?.tvs.results} />
            <Stack spacing={2} alignItems="center" mt={4} py={2}>
                <Pagination 
                    count={data?.tvs.totalPages}
                    page={page}
                    onChange={handlePaginate} 
                    size="large"/>
            </Stack>
        </Container>

    )
}

export default Tv;