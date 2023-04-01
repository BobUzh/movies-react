import { useQuery } from "@apollo/client";
import { TOP_RATED } from '../queries/topRatedQuery';
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material"

import Carousel from "../components/Carousel";

const NewThisWeek = () => {
    const {loading, error, data} = useQuery(TOP_RATED);

    return (
        <Box mt={15}>
            <Typography
                align="center"
                variant="h3"
            >Browse rating movies & TV shows</Typography>
            <Box display="flex" mt={5}>
                <Box width={190} mr={4}>
                    <Typography variant="h6">New movies</Typography>
                    <Typography color="GrayText" variant="body2" mt={3}>Take a look at every new movie that recently became available on streaming services.</Typography>
                </Box>
                <Carousel totalSlides={20}>
                    { data?.movieTopRated.results.map((tv, idx) => (
                        <Box key={tv.id} display="flex">
                            <Typography 
                                component="div"
                                display="inline-block" 
                                overflow="hidden"
                                letterSpacing={-20}
                                lineHeight="100%"
                                fontSize={180}
                                fontWeight="900"
                                sx={{color: '#222c38'}}
                            >{++idx}</Typography>
                            <Box component={Link} to={`movies/${tv.id}`}>
                                <img 
                                    style={{minWidth: 190, marginRight: 10}} 
                                    src={`https://image.tmdb.org/t/p/w154${tv.posterPath}`} 
                                    alt="" />
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Box>
            <Box display="flex" mt={5}>
                <Box width={190} mr={4}>
                    <Typography variant="h6">New TV Shows</Typography>
                    <Typography color="GrayText" variant="body2" mt={3}>Take a look at every new TV show that recently became available on streaming services.</Typography>
                </Box>
                <Carousel>
                    { data?.tvTopRated.results.map((tv, idx) => (
                        <Box key={tv.id} display="flex">
                            <Typography 
                                component="div"
                                display="inline-block" 
                                overflow="hidden"
                                letterSpacing={-20}
                                lineHeight="100%"
                                fontSize={180}
                                fontWeight="900"
                                sx={{color: '#222c38'}}
                            >{++idx}</Typography>
                            <Box component={Link} to={`tv/${tv.id}`}>
                                <img 
                                    style={{minWidth: 190, marginRight: 10}} 
                                    src={`https://image.tmdb.org/t/p/w154/${tv.posterPath}`} 
                                    alt="" />
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </Box>
    )
}

export default NewThisWeek;