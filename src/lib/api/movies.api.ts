import { CavistaAPI } from "./axios";

export const fetchSeries = async () => {
  const { data } = await CavistaAPI.get(
    "/entries?_limit=21&programType=series"
  )
  const filteredData = data.filter((item: any) => item.releaseYear >= 2010);
   const alphaNumericData = filteredData.sort((a: any, b: any) =>
     a.title.localeCompare(b.title)
   );
   return alphaNumericData;


};
export const fetchMovies = async () => {
  const { data } = await CavistaAPI.get("/entries?_limit=21&programType=movie");

 const filteredData = data.filter((item: any) => item.releaseYear >= 2010);
 const alphaNumericData = filteredData.sort((a: any, b: any) =>
   a.title.localeCompare(b.title)
 );
 return alphaNumericData;
};
