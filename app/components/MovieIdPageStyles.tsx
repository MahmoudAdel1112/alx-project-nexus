"use client";
import styled from "styled-components";

// Styled Components
export const PageContainer = styled.div`
  padding: 2rem;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PosterContainer = styled.div`
  max-width: 300px;
  width: 100%;
  flex-shrink: 0;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 2 / 3; /* Maintain 2:3 aspect ratio for posters */

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const MovieInfo = styled.div`
  flex: 1;
`;

export const MovieTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

export const MovieOverview = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

export const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

export const GenreBadge = styled.span`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(240, 173, 78, 0.9);
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ec971f;
  }

  &.favorited {
    background-color: rgba(217, 83, 79, 0.9);

    &:hover {
      background-color: #c9302c;
    }
  }
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

export const MovieCard = styled.div`
  position: relative;
  aspect-ratio: 2 / 3;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LoadingText = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;
