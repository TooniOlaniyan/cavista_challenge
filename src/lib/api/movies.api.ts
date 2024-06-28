import data from "../feed/sample.json";
import { IMovies } from "../../types";

export const fetchSeries = async () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      const filteredMovies = data.entries.filter(
        (movie: IMovies) => movie.releaseYear >= 2010 && movie.programType==='series'
      );
      const first21Movies = filteredMovies.slice(0, 21); // Select the first 21 movies
      resolve(first21Movies);
    }, 1000);
  });
};
export const fetchMovies = async () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      const filteredMovies = data.entries.filter(
        (movie: IMovies) => movie.releaseYear >= 2010 && movie.programType==='movie'
      );
      const first21Movies = filteredMovies.slice(0, 21); // Select the first 21 movies
      resolve(first21Movies);
    }, 1000);
  });
};
