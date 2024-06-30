export interface IHomeCard {
  type: string;
  description: string;
  image?: string;
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

export interface DropdownProps {
  options: {
    label: string;
    value: string;
    disabled?: boolean;
    hidden?: boolean;
    selected?: boolean;
  }[];
  onChange: (value: string) => void;
}

export interface SearchInputProps {
  onSearch: (query: string) => void;
}
