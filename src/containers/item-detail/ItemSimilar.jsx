import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import { Box, Typography } from "@mui/material";

const ItemSimilar = ({data}) => {

    return (
        <>
            <Box mt={5}>
                <Typography pt={5} variant="h4">
                    Similar Movies
                </Typography>
                <Carousel totalSlides={data?.length}>
                    {data?.map(e => (
                    <Box 
                        key={e.id} 
                        ml={0} 
                        display="flex" 
                        flexDirection="column" 
                        sx={{width: '100%'}} 
                        mr={1}
                    >
                        <Box component={Link} to={`/movies/${e.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w154${e?.posterPath}`} alt="" />
                        </Box>
                    </Box>
                    ))}
                </Carousel>
            </Box>
        </>
    )
}

export default ItemSimilar;