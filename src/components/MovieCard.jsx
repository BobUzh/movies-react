import { Card, CardContent, CardMedia, Typography} from "@mui/material";


const MovieCard = ({card}) => {

    return (
            <Card 
                variant="elevation"
                sx={{maxWidth: 350, p:3, background: 'linear-gradient(rgba(255, 255, 255, 0.09), #121212)'}}
            >
                <CardMedia
                    component="img"
                    height="190" 
                    image={card.img} />
                <CardContent align="center" sx={{mt:3}}>
                    <Typography
                        variant="body2"
                        color="primary">{card.tag}</Typography>
                    <Typography
                        variant="h6"
                        my={2} >{card.title}</Typography>
                    <Typography
                        color="GrayText"
                        variant="caption">{card.text}</Typography>
                </CardContent>
            </Card>
    )
}

export default MovieCard;