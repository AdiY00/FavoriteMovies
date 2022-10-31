import * as React from 'react';
import { Container } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Button, Paper, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MovieEditor(props) {
  const { i, movies, updateMovies } = props;
  let { movie } = props;

  movie = movie ?? {
    name: '',
    release: 2022,
    score: 5,
    summary: '',
    image: '',
  };

  return (
    <Container
      maxWidth=''
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        height: '90vh',
      }}
    >
      <Paper
        component='form'
        style={{ padding: 10 }}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <Rating
          defaultValue={movie.score}
          max={10}
          precision={0.5}
          onChange={(e, newValue) => (movie.score = newValue)}
        />
        <br />
        <TextField
          id='movie-name'
          label='Movie Name'
          variant='outlined'
          defaultValue={movie.name}
        />
        <TextField
          id='release-year'
          label='Release Year'
          variant='outlined'
          type='number'
          defaultValue={movie.release}
          onChange={(e, newValue) => (movie.release = newValue)}
        />
        <br />
        <TextField
          id='image-link'
          label='Image Link'
          variant='outlined'
          style={{ width: 460 }}
          onChange={(e, newValue) => (movie.image = newValue)}
        />
        <br />
        <TextField
          id='movie-summary'
          label='Movie Summary'
          multiline
          minRows={4}
          style={{ width: 460 }}
          onChange={(e, newValue) => (movie.summary = newValue)}
        />
        <br />
        <Button
          onClick={() => {
            i >= 0 ? (movies[i] = movie) : movies.push(movie);
            updateMovies([...movies]);
            console.table(movies);
          }}
          // component={Link}
          // to={'/'}
          variant='contained'
          style={{ width: 460 }}
        >
          SUBMIT
        </Button>
      </Paper>
    </Container>
  );
}
