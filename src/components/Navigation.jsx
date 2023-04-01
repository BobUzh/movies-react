import { Link } from "react-router-dom"

import { HiveOutlined } from "@mui/icons-material"
import { AppBar, Button, IconButton, Stack, TextField, Toolbar, Typography } from "@mui/material"


const Navigation = () => {

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton component={Link} to="/">
                    <HiveOutlined />
                </IconButton>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    VOOX
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Button component={Link} to="movies">Movies</Button>
                    <Button component={Link} to="tv">Tv</Button>
                    <TextField type="search" variant="standard" size="small"/>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation