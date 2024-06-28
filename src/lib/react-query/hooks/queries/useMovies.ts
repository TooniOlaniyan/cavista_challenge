import { useQuery } from "@tanstack/react-query"
import {  fetchMovies, fetchSeries } from "../../../api/movies.api";
import { IMovies } from "../../../../types";

export const useFetchSeries:any = () => {
  return useQuery<IMovies[], Error>({
    queryKey: ["movies"],
    queryFn: () => fetchSeries(),
  });
};
export const useFetchMovies:any = () => {
  return useQuery<IMovies[], Error>({
    queryKey: ["movies"],
    queryFn: () => fetchMovies(),
  });
};
