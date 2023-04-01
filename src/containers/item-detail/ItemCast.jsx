import { Box, Typography, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";

const ItemCast = ({data}) => {

    return (
        <>
            <Typography mb={2}  variant="h4">
                Series Cast
            </Typography>
            <Box 
                className="people" 
                display="flex" 
                flexWrap="wrap" 
                overflow="auto" 
                maxHeight={600}
            >
                {data?.map(e => e.profile_path && (
                    <Box 
                        key={e.id} 
                        pr={1}
                        display="flex" 
                        flexDirection="column"
                        sx={{width: {
                            xs: '50%',
                            sm: '33.3%',
                            md: '20%',
                            lg: '16.6%',
                        } }}
                    >
                        <ImageListItem width={1} component={Link} to={`/people/${e.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w154${e.profile_path}`} alt="" />
                        </ImageListItem>
                        <Box height={1} p={2}>
                            <Typography fontWeight={600} variant="h6">{e.name}</Typography>
                            <Typography>{e.character}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default ItemCast;