import { useQuery } from "@tanstack/react-query"
import {  fetchMovies, fetchSeries } from "../../../api/movies.api";
import { IMovies } from "../../../../types";

export const useFetchSeries:any = () => {
  return useQuery<IMovies[], Error>({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetchSeries();
      return response;
    },
  });
};
export const useFetchMovies:any = () => {
  return useQuery<IMovies[], Error>({
    queryKey: ["series"],
    queryFn: async () => {
      const response = await fetchMovies();
      return response;
    },
  });
};
