import React from "react";
import "../style/movieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150x200?text=No+Image"}
        alt={movie.Title}
        className="movie-poster"
      />
      <div className="movie-details">
        <h2 className="movie-title">{movie.Title}</h2>
        <p className="movie-info">
          <span className="movie-info-label">Released:</span>
          {movie.Year}
        </p>
        <p className="movie-info">
          <span className="movie-info-label">Imdb Id:</span>
          {movie.imdbID}
        </p>
        <p className="movie-info">
          <span className="movie-info-label">Type :</span>
          {movie.Type}
        </p>
        {console.log(movie.Plot)}
      </div>
    </div>
  );
};

export default MovieCard;
