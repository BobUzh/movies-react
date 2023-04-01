import { useQuery } from "@apollo/client";
import { POPULAR } from "../queries/popularQuery";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material"

import Carousel from "../components/Carousel";


const TopThisWeek = () => {
    const {loading, error, data} = useQuery(POPULAR);
    
    return (
        <Box mt={4}>
            <Typography
                align="center"
                variant="h3"
            >Browse popular movies & TV shows</Typography>
            <Box display="flex" mt={5}>
                <Box width={190} mr={4}>
                    <Typography variant="h6">Top 10 movies this week</Typography>
                    <Typography color="GrayText" variant="body2" mt={3}>Check out this week’s most popular movies and find out where to watch them.</Typography>
                </Box>
                <Carousel totalSlides={20}>
                    { data?.moviePopular.results.map((movie, idx) =>  (
                        <Box key={movie.id} display="flex">
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
                            <Box component={Link} to={`movies/${movie.id}`}>
                                <img 
                                    style={{minWidth: 190, marginRight: 10}} 
                                    src={`https://image.tmdb.org/t/p/w154${movie.posterPath}`} 
                                    alt="" />
                            </Box>

                        </Box>
                    ))}
                </Carousel>
            </Box>
            <Box display="flex" mt={5}>
                <Box width={190} mr={4}>
                    <Typography variant="h6">Top 10 shows this week</Typography>
                    <Typography color="GrayText" variant="body2" mt={3}>Explore this week’s most popular TV shows and find out where to stream them.</Typography>
                </Box>
                <Carousel totalSlides={20}>
                    { data?.tvPopular.results.map((t, idx) => (
                        <Box key={t.id} display="flex">
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
                            <Box component={Link} to={`tv/${t.id}`}>
                                <img 
                                    style={{minWidth: 190, marginRight: 10}} 
                                    src={`https://image.tmdb.org/t/p/w154/${t.posterPath}`} 
                                    alt="" />
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </Box>
    )
}

export default TopThisWeek;