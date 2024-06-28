import { useState } from "react";
import MovieCard from "../../components/MovieCard";
import { useFetchMovies } from "../../lib/react-query/hooks/queries/useMovies";

const Movies = () => {
  const [page, setPage] = useState(1);
  const pageSize = 21;
  const { data, isLoading, isError, isFetching } = useFetchMovies();
  if (isLoading) return <div>Loading...</div>;

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl mb-6 md:py-8 md:px-20 px-5 py-5 text-white w-full bg-gray-800">
        Popular Movies
      </h2>
      <div className="flex flex-col gap-7 md:gap-0 md:flex-row items-center justify-between mb-6 w-full px-5 md:px-20">
        <div className="relative  mr-4 w-full md:w-[30rem]">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 w-full h-[2.3rem] shadow-lg"
          />
          <span className="absolute flex justify-center items-center py-3 px-6 right-0 top-0 text-gray-400 bg-blue-800 h-full">
            <img src="/assets/search.png" className="w-5 h-5 object-contain" />
          </span>
        </div>
        <select className="p-2 border border-gray-300 rounded-lg shadow-lg h-[2.3rem] w-full md:w-[10rem]">
          <option value="" disabled selected hidden>
            Sort By...
          </option>
          <option value="year-a">Year in descending</option>
          <option value="year-d">Year in ascending</option>
          <option value="title-d">Title in descending</option>
          <option value="title-a">Title in ascending</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4 px-5 md:px-20">
        {data?.map((movie: any) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
      {isFetching && <div>Loading more...</div>}
      <button
        onClick={loadMore}
        disabled={isLoading || isFetching || (data && data.length < pageSize)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Load More
      </button>
    </div>
  );
};

export default Movies;
