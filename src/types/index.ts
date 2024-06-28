export interface IHomeCard {
    type:string
    description:string
    image?: string
}
export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface IMovies {
  title: string;
  description: string;
  programType: string;
  images: {
    "Poster Art": Image;
  };
  releaseYear: number;
}