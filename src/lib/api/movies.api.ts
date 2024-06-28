import data from "../feed/sample.json";

export const fetchMovies = async () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(data.entries);
    }, 1000);
  });
};
