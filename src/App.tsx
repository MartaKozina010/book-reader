import { Route, Routes } from 'react-router-dom';
import './App.css';
import { FavoriteBooks } from './components/FavoriteBooks';
import { HomePage } from './components/HomePage';
import { ReadBook } from './components/ReadBook';
import {Error} from './components/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/book-reader" element={<HomePage/>}/>
        <Route path="/book-reader/book/:id" element={<ReadBook/>}/>
        <Route path="/book-reader/favorites" element={<FavoriteBooks/>}/>
        <Route path="/book-reader/*" element={<Error/>}/>
      </Routes>
      </>
  );
}

export default App;
