import { useQuery } from "@apollo/client";
import { MOVIES } from "../queries/moviesQuery";

import ItemList from "../containers/item-list/ItemList";
import Filter from "../containers/Filter"
import { useState } from "react";
import { Container, Pagination, Stack } from "@mui/material";

const Movies = () => {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState([]);
    const {loading, error, data} = useQuery(MOVIES, {variables: { page: page, params: filter}});

    const handlePaginate = (e, value) => setPage(value);

    const changeFilter = (value, name) => {
        let _filter = filter.filter(f => f.name != name);
        let options = {name, value};
        setFilter([..._filter, options]);
        setPage(1);
    }

    return (
        <Container maxWidth='xl'>
            <Filter genres={data?.movieGenres} changeFilter={changeFilter}/>
            {loading && <h1>Loading...</h1>}
            <ItemList list={data?.movies.results} />
            <Stack spacing={2} alignItems="center" mt={4} py={2}>
                <Pagination 
                    count={data?.movies.totalPages}
                    page={page}
                    onChange={handlePaginate} 
                    size="large"
                />
            </Stack>
        </Container>

    )
}

export default Movies;