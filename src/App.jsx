import React, { useState } from 'react';
import MovieList from './Components/MovieList/movielist';
import Filter from './Components/Filter/filter';
import AddMovie from './Components/AddMovie/addmovie';
import { Container } from 'react-bootstrap';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://imgs.search.brave.com/vAy_x_7QpJIivqV2iswJ3wf3tc-ocziJwNJ0BwJIfYg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QxL2Y4/Lzk0L2QxZjg5NDE1/NDM0YjYwNTUwNDg0/MzhmMDlkYjMxMjNh/LmpwZw',
      rating: 4.8,
    },
    
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      return (
        (title === '' || movie.title.toLowerCase().includes(title.toLowerCase())) &&
        (rating === '' || movie.rating >= parseFloat(rating))
      );
    });
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies); 
  };

  return (
    <Container>
      <h1 className="my-4">My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <AddMovie onAddMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </Container>
  );
};

export default App;
