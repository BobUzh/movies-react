import { Box, Card, CardContent, CardMedia, Stack, Typography, Container } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const ItemHead = ({data}) => {

    return (
        <Box width={1} sx={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${data?.backgroundPath})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <Box sx={{height: '100%', backgroundColor: 'rgba(31.5, 31.5, 31.5, 0.74)'}}>
                <Container maxWidth='xl'>
                    <Card sx={{display: 'flex', padding: '100px 0', background: 'transparent'}}>
                        <CardMedia 
                            sx={{maxWidth: '300px', marginRight: '20px'}}
                            component="img"
                            image={`https://image.tmdb.org/t/p/w154${data?.posterPath}`}>
                        </CardMedia>
                        <CardContent>
                            <Box>
                                <Typography display="inline-block" variant="h4" fontWeight="900" >{data?.title}</Typography>
                                <Typography component="span" variant="h4" ml={2} color="grey">{data?.releaseDate}</Typography>
                                <Stack direction="row" spacing={1}>
                                    <Typography>Genres:</Typography>
                                    { data?.genres?.map(e => <Typography key={e.id}>{e.name},</Typography>)}
                                </Stack>
                            </Box>
                            <Box mt={4}>
                                <Typography variant="h6">Overview</Typography>
                                <Typography mt={1} variant="subtitle2">{data?.overview}</Typography>
                            </Box>
                            <Stack spacing={2} direction="row" mt={3}>
                                <Typography display="inline-block">Actors: </Typography>
                                <Typography component={Link} to="actor" color="primary" sx={{textDecoration: 'none'}}>The Last of Us</Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </Box>
    )
}

export default ItemHead;