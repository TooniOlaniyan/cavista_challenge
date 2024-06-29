import { CavistaAPI } from "./axios";

export const fetchSeries = async () => {
  const { data } = await CavistaAPI.get(
    "/entries?_limit=21&programType=series&releaseYear_gte=2010"
  );
   const alphaNumericData = data.sort((a: any, b: any) =>
     a.title.localeCompare(b.title)
   );
   return alphaNumericData;


};
export const fetchMovies = async () => {
  const { data } = await CavistaAPI.get("/entries?_limit=21&programType=movie&releaseYear_gte=2010");

  const alphaNumericData = data.sort((a: any, b: any) =>
    a.title.localeCompare(b.title)
  );
  return alphaNumericData;
};
