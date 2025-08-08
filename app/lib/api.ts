import { Movie, MovieDetails } from "@/app/interfaces";
import { notFound } from "next/navigation";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  next: {
    revalidate: 60 * 60 * 24, // Revalidate every 24 hours
  },
};

async function fetchFromAPI(path: string) {
  const res = await fetch(`${BASE_URL}/${path}`, options);

  if (res.status === 404) {
    // This will trigger the `not-found.tsx` page
    notFound();
  }

  if (!res.ok) {
    // This will be caught by the `error.tsx` file
    throw new Error(`Failed to fetch from ${path}`);
  }

  return res.json();
}

export async function getTrendingMovies(page: number = 1): Promise<Movie[]> {
  const data = await fetchFromAPI(
    `trending/movie/week?language=en-US&page=${page}`
  );
  console.log(data);
  return data.results;
}

export async function getMovieDetails(movieId: number): Promise<MovieDetails> {
  return fetchFromAPI(`movie/${movieId}?language=en-US`);
}

export async function getMovieRecommendations(
  movieId: number
): Promise<Movie[]> {
  const data = await fetchFromAPI(
    `movie/${movieId}/recommendations?language=en-US`
  );
  return data.results;
}
