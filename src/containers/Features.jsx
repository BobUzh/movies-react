import { Box } from "@mui/material";
import MovieCard from "../components/MovieCard";


const cards = [
    {img:'/images/all_in_one_place-comp.png', tag: 'ALL IN ONE PLACE', title: 'The complete streaming guide', text: 'Get personal recommendations for all your favorite streaming services. We’ll show you where to watch movies, TV shows & sports.'},
    {img:'/images/one_search-comp.png', tag: 'ONE SEARCH', title: 'Every platform in one search', text: 'Never go back-and-forth between streaming services again to see if a movie or TV show is available. We’ve got you covered with one search.'},
    {img:'/images/one_watchlist-comp.png', tag: 'ONE WATCHLIST', title: 'Combine all your watchlists', text: 'Create a single watchlist with every movie and TV show you want to watch – covering every streaming service in one list across all your devices.'}
]

const Features = () => {

    return (
        <Box 
            display="flex"
            justifyContent="center"
            mt={4}
            sx={{gap: 2}}
        >
            {cards.map(card => <MovieCard key={card.img} card={card}/>)}
        </Box>
    )
}

export default Features;