import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

export default function MovieCard(props) {
  const movie = props.movie;
  const id = props.id;
  const remove = props.remove;

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ margin: 20, height: 345, display: 'flex', flexDirection: 'row-reverse' }}
      className='card'
    >
      <Fab
        color='secondary'
        aria-label='remove'
        size='small'
        style={{ position: 'fixed', margin: 3, backgroundColor: '#ef5350' }}
        className='remove'
        onClick={() => remove()}
      >
        <RemoveIcon />
      </Fab>
      <CardActionArea component={Link} to={'/Movies/' + movie.name.replaceAll(' ', '-')}>
        <CardMedia component='img' height='175' image={movie.image} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {movie.name}
          </Typography>
          <Typography variant='body2' color='text.secondary' className='overflow'>
            {movie.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
