import React, { useState, useEffect } from 'react';
import { movies } from './api';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="body">
      {movies.results.map(movie => (
        <div key={movie.id} className="poster-container" >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="overview">
            <MovieOverview title={movie.title} overview={movie.overview} />
          </div>
          <div className="text">
            <span className="title">{movie.title}</span>
            <span className="rating">{movie.vote_average}</span>
            {/* <p>개봉일: {movie.release_date}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}


function MovieOverview({ title, overview }) {
  return (
    <div>
      <p id="overview-title">{title}</p>
      <p id="overview-info">{overview}</p>
    </div>
  );
}

export default App;