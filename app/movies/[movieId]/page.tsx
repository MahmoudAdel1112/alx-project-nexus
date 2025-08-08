import Link from "next/link";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import {
  PageContainer,
  MovieDetailsContainer,
  PosterContainer,
  MovieInfo,
  MovieTitle,
  MovieOverview,
  MetaInfo,
  GenreBadge,
  MovieGrid,
  MovieCard,
} from "@/app/components/MovieIdPageStyles";
import FavoriteButton from "@/app/components/FavoriteButton";
import Image from "next/image";
import { getMovieDetails, getMovieRecommendations } from "@/app/lib/api";
import { Movie } from "@/app/interfaces";
import GoBackButton from "@/app/components/GoBackButton";

interface MovieDetailPageProps {
  params: Promise<{ movieId: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: MovieDetailPageProps): Promise<Metadata> {
  const { movieId } = await params; // Await params to get movieId
  const movie = await getMovieDetails(Number(movieId));

  return {
    title: movie.title,
    description: movie.overview,
  };
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const { movieId } = await params; // Await params to get movieId
  const [movie, recommendations] = await Promise.all([
    getMovieDetails(Number(movieId)),
    getMovieRecommendations(Number(movieId)),
  ]);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const posterUrl = movie.poster_path
    ? `${imageBaseUrl}${movie.poster_path}`
    : "https://via.placeholder.com/500x750.png?text=No+Image";

  return (
    <PageContainer>
      <Toaster />
      <GoBackButton />
      <MovieDetailsContainer>
        <PosterContainer>
          <Image
            src={posterUrl}
            alt={`Poster for ${movie.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
          <FavoriteButton movie={movie} />
        </PosterContainer>
        <MovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <MetaInfo>
            <span>⭐ {movie.vote_average.toFixed(1)} / 10</span>
            <span>🕒 {movie.runtime} min</span>
            <span>📅 {movie.release_date}</span>
          </MetaInfo>
          <MovieOverview>{movie.overview}</MovieOverview>
          <div>
            {movie.genres.map((genre) => (
              <GenreBadge key={genre.id}>{genre.name}</GenreBadge>
            ))}
          </div>
        </MovieInfo>
      </MovieDetailsContainer>

      <h2>Recommended Movies</h2>
      <MovieGrid>
        {recommendations.map((rec: Movie) => {
          const recPosterUrl = rec.poster_path
            ? `${imageBaseUrl}${rec.poster_path}`
            : "https://via.placeholder.com/500x750.png?text=No+Image";
          return (
            <Link href={`/movies/${rec.id}`} key={rec.id}>
              <MovieCard>
                <Image
                  src={recPosterUrl}
                  alt={`Poster for ${rec.title}`}
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
    </PageContainer>
  );
}
