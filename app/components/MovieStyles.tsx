"use client";
import styled from "styled-components";

export const HeadingText = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 2rem 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
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
