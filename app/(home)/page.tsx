import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  MovieGrid,
  MovieCard,
  HeadingText,
} from "@/app/components/MovieStyles";
import { getTrendingMovies } from "@/app/lib/api";
import { Movie } from "@/app/interfaces";
import Pagination from "@/app/components/Pagination";

export const metadata: Metadata = {
  title: "Project Nexus - Trending Movies",
  description: "Discover the latest trending movies, updated weekly.",
};

interface HomeProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = await searchParams; // Await the searchParams Promise
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const movies: Movie[] = await getTrendingMovies(currentPage);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <HeadingText>Trending Movies</HeadingText>
      <MovieGrid>
        {movies.map((movie) => {
          const posterUrl = movie.poster_path
            ? `${imageBaseUrl}${movie.poster_path}`
            : "https://via.placeholder.com/500x750.png?text=No+Image"; // Fallback

          return (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard>
                <Image
                  src={posterUrl}
                  alt={`Poster for ${movie.title}`}
                  width={500}
                  height={750}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </MovieCard>
            </Link>
          );
        })}
      </MovieGrid>
      <Pagination currentPage={currentPage} />
    </div>
  );
}
