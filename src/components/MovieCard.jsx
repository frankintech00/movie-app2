import React from "react";

const MovieCard = ({ movie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="">
      <h5>{movie.title}</h5>
      {movie.poster_path ? (
        <img
          src={`${IMAGE_PATH}${movie.poster_path}`}
          alt={movie.title}
          className="w-32 h-48"
        />
      ) : (
        <div className="w-32 h-48 bg-gray-300"></div>
      )}
    </div>
  );
};

export default MovieCard;
