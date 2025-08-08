export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails extends Movie {
  overview: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  genres: Genre[];
}
