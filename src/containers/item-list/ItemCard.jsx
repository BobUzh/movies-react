import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Pagination, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const ItemCard = ({movie, grid}) => {

    console.log(movie)

    return (
        <Card 
            variant="elevation"
            sx={{position: 'relative',display: 'flex', p:3, background: 'linear-gradient(rgba(255, 255, 255, 0.09), #121212)'}}
        >
            <CardActionArea component={Link} to={movie.id} sx={{width: 'auto'}}>
                <CardMedia
                    component="img"
                    sx={{width: 190}}
                    image={`https://image.tmdb.org/t/p/w154/${movie.posterPath}`}
                />
            </CardActionArea>

            <Typography
                position="absolute"
                top="2px"
                right="2px" 
            >{movie.voteAverage}</Typography>
            {grid != 2 ? (
                <CardContent>

                {/* MOVIE NAME */}
                <Typography
                    variant="h6"
                    mt={2} >{movie.title}</Typography>

                {/* MOVIE DATE */}
                <Box mb={1}>
                    <Typography
                        display="inline-block"
                        width={95}
                        color="GrayText"
                        variant="h7" >{movie.releaseDate}
                    </Typography>

                </Box>
                <Box display="flex">

                    {/* MOVIE TEXT */}
                    { grid == 12 ? (
                        <Box width={1} pr="50px">
                        <Typography
                            display="inline-block"
                            component="span"
                            variant="body2">{movie.overview}</Typography>
                        </Box>
                        ) : ''}
                    <Box width={1}>
                        {/* MOVIE GENRES */}
                        <Box>
                            <Typography
                                display="inline-block"
                                width={95}
                                component="span"
                                variant="body1">Genres: </Typography>
                            <Typography
                                display="inline-block"
                                variant="body1">{movie.genres.map(g => g.name).join(', ')}</Typography>
                        </Box>

                        { grid == 12 ? ( 
                        <>
                        <Box>
                            <Typography
                                display="inline-block"
                                width={95}
                                component="span"
                                variant="body2">Director:</Typography>
                            <Typography
                                display="inline-block"
                                variant="body2"
                                color="primary">{'movie.director.join()'}</Typography>
                        </Box>

                        <Box>
                            <Typography
                                display="inline-block"
                                width={95}
                                component="span"
                                variant="body2">Actors:</Typography>
                            <Typography
                                display="inline-block"
                                variant="body2"
                                color="primary">{'movie.stars.join()'}</Typography>
                        </Box>
                        </>
                        ) : ''}
                    </Box>

                </Box>
                </CardContent>
            ) : ''}
        </Card>
    )
}

export default ItemCard;