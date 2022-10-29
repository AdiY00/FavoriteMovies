import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './assets/Pages/Home';
import Bar from './assets/Components/Bar';
import NoPage from './assets/Pages/NoPage';
import About from './assets/Pages/About';

function App() {
  return (
    <BrowserRouter>
      <Bar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Movies'>{/* add the list of movies */}</Route>
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
