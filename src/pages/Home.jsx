import { Container } from "@mui/material"

import Features from "../containers/Features";
import NewThisWeek from "../containers/NewThisWeek";
import TopThisWeek from "../containers/TopThisWeek";
import UpComming from "../containers/UpComming";


const Home = () => {

    return (
        <Container maxWidth='xl'>
            <Features />
            <TopThisWeek />
            <UpComming />
            <NewThisWeek />
        </Container>
    )
}

export default Home;