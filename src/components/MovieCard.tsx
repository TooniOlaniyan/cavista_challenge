import { IMovies } from "../types";
import React from "react";
interface MovieCardProps {
  movie: IMovies;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className=" min-h-[16rem] w-full md:w-[10rem]">
        <img
          src={movie.images["Poster Art"].url}
          alt={movie.programType}
          className="rounded-lg mb-2 object-contain w-full h-full"
        />
      </div>
      <p className="text-sm">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
