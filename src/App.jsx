import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './assets/Pages/Home';
import Bar from './assets/Components/Bar';
import NoPage from './assets/Pages/NoPage';
import About from './assets/Pages/About';
import { useState } from 'react';

let Movies = [
  {
    name: 'Fight Club',
    release: 1999,
    score: 9.5,
    summary:
      "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
    image:
      'https://rukminim1.flixcart.com/image/416/416/j110uq80/poster/9/5/g/large-poster-pp-p0096-original-fight-club-movie-poster-original-imaesmyekgd2gnqx.jpeg?q=70',
  },
  {
    name: 'Forest Gump',
    release: 1994,
    score: 9.5,
    summary:
      'Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).',
    image: 'https://i.pinimg.com/originals/26/9d/5f/269d5f464587df6a90f8ab9069396943.jpg',
  },
  {
    name: 'The Shawshank Redemption',
    release: 1994,
    score: 9.5,
    summary:
      "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.",
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc0NDA0NzU5NF5BMl5BanBnXkFtZTgwNTQ2MjEyMDE@._V1_FMjpg_UX500_.jpg',
  },
];

function App() {
  const [movies, updateMovies] = useState(Movies);
  const removeMovie = i => () => {
    movies.splice(i, 1);
    updateMovies([...movies]);
  };

  return (
    <BrowserRouter>
      <Bar />
      <Routes>
        <Route path='/'>
          <Route
            index
            element={
              <Home
                movies={movies}
                updateMovies={updateMovies}
                removeMovie={removeMovie}
              />
            }
          />
          <Route path='About' element={<About />} />
          <Route path='Movies'>
            {movies.map((movie, i) => (
              <Route path={movie.name.replace(' ', '-')} element={<></>} />
            ))}
          </Route>
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
