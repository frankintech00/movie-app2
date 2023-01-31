import React from "react";

const MovieCard = ({ movie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="">
      {movie.poster_path ? (
        <img
          src={`${IMAGE_PATH}${movie.poster_path}`}
          alt={movie.title}
          className="w-[100%] object-cover"
        />
      ) : null}
      <h5 className="text-center text-2xl font-medium text-gray-300 py-2">
        {movie.title}
      </h5>
    </div>
  );
};

export default MovieCard;
