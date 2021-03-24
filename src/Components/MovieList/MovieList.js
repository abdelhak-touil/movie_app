import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = (props) => {
  return (
    <div className="movieList">
      {props.movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
};

export default MovieList;
