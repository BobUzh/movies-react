import { useQuery } from "@apollo/client";
import { PEOPLE } from '../queries/peopleQuery';

import { Box, Card, CardContent, CardMedia, Stack, Typography, Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";


const ActorsDetails = () => {
    const {id} = useParams();
    const {loading, error, data} = useQuery(PEOPLE, {variables: {id: id}});

    return (
        <Container maxWidth='xl'>
            <Card sx={{display: 'flex', padding: '100px 0', background: 'transparent'}}>
                <CardMedia 
                    sx={{minWidth: '300px',maxWidth: '300px', marginRight: '20px', height: 'fit-content'}}
                    component="img"
                    image={`https://image.tmdb.org/t/p/w154${data?.people.profilePath}`}>
                </CardMedia>
                <CardContent>
                    <Box>
                        <Typography display="inline-block" variant="h4" fontWeight="900" >{data?.people.name}</Typography>
                        <Typography component="span" variant="h4" ml={2} color="grey">{data?.people.birthday}</Typography>
                        <Stack direction="row" spacing={1}>
                            <Typography>Known for:</Typography>
                            <Typography >{data?.people.known_for_department}</Typography>
                        </Stack>
                    </Box>
                    <Box mt={4}>
                        <Typography variant="h6">Biography</Typography>
                        <Typography mt={1} variant="subtitle2">{data?.people.biography}</Typography>
                    </Box>
                    <Stack spacing={2} direction="row" mt={3}>
                        <Typography display="inline-block">Actors: </Typography>
                        <Typography component={Link} to="actor" color="primary" sx={{textDecoration: 'none'}}>The Last of Us</Typography>
                    </Stack>
                </CardContent>
            </Card>
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
                        { data?.peopleCreditsMovies?.cast.map(tv => tv.posterPath && (
                            <Box key={tv.id} display="flex">
                                <Box component={Link} to={`/movies/${tv.id}`}>
                                    <img 
                                        style={{minWidth: 190, marginRight: 10}} 
                                        src={`https://image.tmdb.org/t/p/w154${tv.posterPath}`} 
                                        alt="" />
                                </Box>
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Box>
        </Container>
    )
}


export default ActorsDetails;