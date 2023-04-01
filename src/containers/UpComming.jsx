import { useQuery } from "@apollo/client";
import { UP_COMMING } from '../queries/upCommingQuery'
import { Box, Typography } from "@mui/material"
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

const UpComming = () => {
    const {loading, error, data} = useQuery(UP_COMMING);

    return (
        <Box mt="100px">
            <Typography my="25px" textAlign="center" variant="h4">IS COMMING SOON</Typography>
            <Box>
                <Carousel >
                    {data?.comming.results.map(movie => (
                        <Box key={movie.id} sx={{minWidth: '1488px'}}>
                            <Box display="flex" justifyContent="center" alignItems="center" p="50px" gap={10}>
                                <Box component={Link} to={`movies/${movie.id}`}>
                                    <img style={{minWidth: 190}} src={`https://image.tmdb.org/t/p/w154${movie.posterPath}`} alt="" />
                                </Box>
                                <Box>
                                    <Typography variant="h5">{movie.title}</Typography>
                                    <Typography py="15px" color="primary" variant="body2">IMDB 8.0 (138k) </Typography>
                                    <Typography color="gray">{movie.overview}</Typography>
                                </Box>
                                <Box position="absolute" zIndex={-1} width="1">
                                    <img width="100%" src={`https://image.tmdb.org/t/p/w500${movie.backdgroundPath}`} alt="" />
                                    <Box top={0} width={1} height={1} position="absolute" sx={{backgroundColor: 'rgba(0,0,0,.8)'}}></Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </Box>
    )
}

export default UpComming;