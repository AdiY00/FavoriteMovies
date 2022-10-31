import { Divider, Grid, Paper, Rating, Typography } from '@mui/material';
import { Container, display, flexbox } from '@mui/system';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const MoviePage = props => {
  const { i, movies, updateMovies, removeMovie } = props;
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
        elevation={4}
        style={{
          padding: 15,
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Container style={{ maxWidth: 500 }}>
          <h1>{movies[i].name}</h1>
          <h2>{movies[i].release}</h2>
          <Rating
            value={movies[i].score}
            max={10}
            precision={0.5}
            onChange={(e, newValue) => {
              movies[i].score = newValue;
              updateMovies([...movies]);
            }}
          />
          <Divider style={{ marginTop: 7, marginBottom: 10 }} />
          <Typography variant='body2' color='text.secondary' style={{ marginBottom: 10 }}>
            {movies[i].summary}
          </Typography>
        </Container>
        <img
          src={movies[i].image}
          style={{ borderRadius: 8, minWidth: 200, maxWidth: 400 }}
        />
      </Paper>
      <Fab
        style={{
          top: 'auto',
          right: '60px',
          bottom: '60px',
          left: 'auto',
          position: 'fixed',
        }}
        color='secondary'
        aria-label='add'
      >
        <EditIcon />
      </Fab>
    </Container>
  );
};

export default MoviePage;
