"use client";
import { useState, useEffect } from "react";
import { addFavorite, removeFavorite, isFavorite } from "@/app/lib/localStorage";
import { FavoriteButton as StyledFavoriteButton } from "./MovieIdPageStyles";

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
}

interface FavoriteButtonProps {
  movie: MovieDetails;
}

export default function FavoriteButton({ movie }: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    setIsFavorited(isFavorite(movie.id));
  }, [movie.id]);

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFavorite(movie.id);
      setIsFavorited(false);
    } else {
      addFavorite(movie);
      setIsFavorited(true);
    }
  };

  return (
    <StyledFavoriteButton
      onClick={handleFavoriteClick}
      className={isFavorited ? "favorited" : ""}
    >
      {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
    </StyledFavoriteButton>
  );
}
