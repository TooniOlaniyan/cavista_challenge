import { useState } from "react";
import MovieCard from "../../components/MovieCard";
import { useFetchMovies } from "../../lib/react-query/hooks/queries/useMovies";
import SearchInput from "../../components/SearchInput";
import FilterDropdown from "../../components/FilterDropdown";
import { sortOptions } from "../../constants";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("title_asc");
  const { data: movieData, isLoading, isError: movieError } = useFetchMovies();

  const filteredMovieData = movieData?.filter((series: any) =>
    series.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortData = (data: any[], sortOption: string) => {
    switch (sortOption) {
      case "year_desc":
        return data.sort((a, b) => b.releaseYear - a.releaseYear);
      case "year_asc":
        return data.sort((a, b) => a.releaseYear - b.releaseYear);
      case "title_desc":
        return data.sort((a, b) => b.title.localeCompare(a.title));
      case "title_asc":
        return data.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return data;
    }
  };
  const sortedMovieData = sortData(filteredMovieData || [], sortOption);

  return (
    <div className="flex flex-col items-start">
      <h2 className="text-2xl mb-6 md:px-20 px-5 py-5 text-white w-full bg-gray-800">
        Popular Movies
      </h2>

      {isLoading && <div className="py-5 px-5 md:px-20">Loading...</div>}

      {movieError && (
        <div className="px-5 py-5 md:px-20">Oops, something went wrong...</div>
      )}

      {!isLoading && !movieError && (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col gap-7 md:gap-0 md:flex-row items-center justify-between mb-6 w-full px-5 md:px-20">
            <div className="relative mr-4 w-full md:w-[30rem]">
              <SearchInput onSearch={setSearchQuery} />
              <span className="absolute flex justify-center items-center py-3 px-6 right-0 top-0 text-gray-400 bg-blue-800 h-full">
                <img
                  src="/assets/search.png"
                  className="w-5 h-5 object-contain"
                  alt="Search"
                />
              </span>
            </div>
            <FilterDropdown options={sortOptions} onChange={setSortOption} />
          </div>

          {sortedMovieData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 px-5 md:px-20">
              {sortedMovieData.map((movie: any) => (
                <MovieCard key={movie.title} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 font-bold text-lg mt-10">
              This movie does not exist
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Movies;
