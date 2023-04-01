import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { darkTheme } from './theme';

import Home from './pages/Home';
import Footer from './components/Footer';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import Navigation from './components/Navigation';
import Tv from './pages/Tv';
import TvDetail from './pages/TvDetail';
import ActorsDetails from './pages/ActorsDetail';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" justifyContent="space-between" height={1}>
        <Navigation />
        <Box sx={{flexGrow: 1, position: 'relative', margin: 'auto', width: '100%'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetail />} />
            <Route path="tv" element={<Tv />} />
            <Route path="tv/:id" element={<TvDetail />} />
            <Route path="people/:id" element={<ActorsDetails />} />
          </Routes>
        </Box>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
