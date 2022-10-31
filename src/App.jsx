import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './assets/Pages/Home';
import NoPage from './assets/Pages/NoPage';
import About from './assets/Pages/About';
import MoviePage from './assets/Pages/MoviePage';
import Bar from './assets/Components/Bar';
import MovieEditor from './assets/Components/MovieEditor';

let Movies = [
  {
    name: 'Fight Club',
    release: 1999,
    score: 10,
    summary:
      "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.",
    image:
      'https://rukminim1.flixcart.com/image/416/416/j110uq80/poster/9/5/g/large-poster-pp-p0096-original-fight-club-movie-poster-original-imaesmyekgd2gnqx.jpeg?q=70',
  },
  {
    name: 'Forest Gump',
    release: 1994,
    score: 10,
    summary:
      'Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).',
    image: 'https://i.pinimg.com/originals/26/9d/5f/269d5f464587df6a90f8ab9069396943.jpg',
  },
  {
    name: 'The Shawshank Redemption',
    release: 1994,
    score: 10,
    summary:
      "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.",
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc0NDA0NzU5NF5BMl5BanBnXkFtZTgwNTQ2MjEyMDE@._V1_FMjpg_UX500_.jpg',
  },
  {
    name: 'The Silence of The Lambs',
    release: 1991,
    score: 9.5,
    summary:
      "Jodie Foster stars as Clarice Starling, a top student at the FBI's training academy. Jack Crawford (Scott Glenn) wants Clarice to interview Dr. Hannibal Lecter (Anthony Hopkins), a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
    image: 'https://cdn.mos.cms.futurecdn.net/aybwG6Kx6thfNAKNjXcxnV.jpg',
  },
  {
    name: 'The Dark Knight',
    release: 2008,
    score: 9.5,
    summary:
      "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.",
    image:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  },
  {
    name: 'Inception',
    release: 2010,
    score: 9,
    summary:
      "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.",
    image:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg',
  },
  {
    name: 'Gladiator',
    release: 2000,
    score: 8.5,
    summary:
      'Commodus (Joaquin Phoenix) takes power and strips rank from Maximus (Russell Crowe), one of the favored generals of his predecessor and father, Emperor Marcus Aurelius, the great stoical philosopher. Maximus is then relegated to fighting to the death in the gladiator arenas.',
    image: 'https://ae01.alicdn.com/kf/H7d61158295c34a80a1630e4b1ddd8c9bc.jpg',
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

          <Route
            path='New-Movie'
            element={
              <MovieEditor movie={null} movies={movies} updateMovies={updateMovies} />
            }
          />
          <Route path='About' element={<About />} />
          <Route path='Movies'>
            {movies.map((movie, i) => (
              <Route path={movie.name.replaceAll(' ', '-')+ '-' + i}>
                <Route
                  index
                  element={
                    <MoviePage
                      i={i}
                      movies={movies}
                      updateMovies={updateMovies}
                      removeMovie={removeMovie}
                    />
                  }
                />
                <Route
                  path='Edit'
                  element={
                    <MovieEditor
                      movie={movie}
                      i={i}
                      movies={movies}
                      updateMovies={updateMovies}
                    />
                  }
                />
              </Route>
            ))}
          </Route>
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
