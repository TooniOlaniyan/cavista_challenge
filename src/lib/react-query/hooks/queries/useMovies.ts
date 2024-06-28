import { useQuery } from "@tanstack/react-query"
import { fetchMovies } from "../../../api/movies.api";
import { IMovies } from "../../../../types";

export const useMovies:any = () => {
  return useQuery<IMovies[], Error>({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await fetchMovies();
      return response.data;
    },
  });
};
