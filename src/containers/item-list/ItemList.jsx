import { ViewCompactRounded, ViewListRounded, ViewModuleRounded } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";

import { useState } from "react";
import ItemCard from "./ItemCard";


const ItemList = ({list}) => {
    const [grid, setGrid] = useState(4);

    return (
        <Box bgcolor="#212121">
            <Box display="flex" justifyContent="flex-end">
                <IconButton color="warning" onClick={() => setGrid(12)}>
                    <ViewListRounded fontSize="large" />
                </IconButton>
                <IconButton color="warning" onClick={() => setGrid(4)}>
                    <ViewModuleRounded fontSize="large" />
                </IconButton>
                <IconButton color="warning" onClick={() => setGrid(2)}>
                    <ViewCompactRounded fontSize="large" />
                </IconButton>
            </Box>
            <Grid container spacing={1}>
                {list?.map(movie => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={grid}>
                        <ItemCard movie={movie} grid={grid}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ItemList;