import { ViewCompactRounded, ViewList, ViewListRounded, ViewModuleRounded } from "@mui/icons-material";
import { Box, Button, IconButton, MenuItem, Select } from "@mui/material";
import { useCallback, useEffect, useState } from "react";


const Filter = ({genres, changeFilter}) => {
    const [options, setOptions] = useState({});

    useEffect(() => {
        console.log('effect');
    }, [options]);

    const callbackFilter = useCallback(() => {
        changeFilter()
    }, [])

    const changeGenre = (e) => {
        console.log(e.target.value)
    }


    return (
        <Box mt={3} p={3} bgcolor="#212121">
            <Box mt={2} display="flex">
                <Select
                    sx={{width: '100%'}}
                    labelId="demo-simple-select-label"
                    onChange={(e) => changeFilter(e.target.value, 'with_genres')}
                    id="demo-simple-select"
                    displayEmpty
                    defaultValue=""
                >
                    <MenuItem value=""><em>Genres</em></MenuItem>
                    {genres?.length && genres.map(genre =>  <MenuItem key={genre.id} value={(genre.id).toString()}>{genre.name}</MenuItem>)}
                </Select>
                <Select
                    sx={{width: '100%'}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => changeFilter(e.target.value, 'vote_average.gte')}
                    displayEmpty
                    defaultValue=""
                >
                    <MenuItem value=""><em>Rating</em></MenuItem>
                    <MenuItem value={'7'}>7</MenuItem>
                    <MenuItem value={'8'}>8</MenuItem>
                    <MenuItem value={'9'}>9</MenuItem>
                </Select>
                <Select
                    sx={{width: '100%'}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => changeFilter(e.target.value, 'primary_release_year')}
                    displayEmpty
                    defaultValue=""
                >
                    <MenuItem value=""><em>Year</em></MenuItem>
                    <MenuItem value={'2015'}>2015</MenuItem>
                    <MenuItem value={'2020'}>2020</MenuItem>
                    <MenuItem value={'2022'}>2022</MenuItem>
                </Select>
                <Select
                    sx={{width: '100%'}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    displayEmpty
                    defaultValue=""
                >
                    <MenuItem value=""><em>Country</em></MenuItem>
                    <MenuItem value={10}>Usa</MenuItem>
                    <MenuItem value={20}>Germany</MenuItem>
                    <MenuItem value={30}>Ua</MenuItem>
                </Select>
            </Box>
        </Box>
    )
}

export default Filter;