import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import MovieCard from '../Components/MovieCard';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

const Home = props => {
  const { movies, updateMovies, removeMovie } = props;

  return (
    <Container
      maxWidth=''
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      {movies.map((m, i) => (
        <MovieCard movie={m} id={i} key={i} remove={removeMovie(i)} />
      ))}

      <Fab
        component={Link}
        to={'New-Movie'}
        style={{
          top: 'auto',
          right: '60px',
          bottom: '60px',
          left: 'auto',
          position: 'fixed',
        }}
        color='primary'
        aria-label='add'
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default Home;
