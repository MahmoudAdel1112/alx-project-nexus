'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { getFavorites, removeFavorite } from '@/app/lib/localStorage';
import { Movie } from '@/app/interfaces';
import { MovieGrid, MovieCard } from '@/app/components/MovieStyles';
import { Toaster } from 'react-hot-toast';

const PageContainer = styled.div`
  padding: 2rem;
`;

const MovieCardContainer = styled.div`
  position: relative;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  z-index: 10;

  &:hover {
    background-color: #c9302c;
  }
`;

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemoveFavorite = (movieId: number) => {
    removeFavorite(movieId);
    setFavorites(getFavorites()); // Update the state after removal
  };

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <PageContainer>
      <Toaster />
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        <MovieGrid>
          {favorites.map((movie) => {
            const posterUrl = movie.poster_path
              ? `${imageBaseUrl}${movie.poster_path}`
              : 'https://via.placeholder.com/500x750.png?text=No+Image';

            return (
              <MovieCardContainer key={movie.id}>
                <RemoveButton onClick={() => handleRemoveFavorite(movie.id)}>
                  &times;
                </RemoveButton>
                <Link href={`/movies/${movie.id}`}>
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
              </MovieCardContainer>
            );
          })}
        </MovieGrid>
      ) : (
        <p>You haven&apos;t added any favorites yet.</p>
      )}
    </PageContainer>
  );
}

