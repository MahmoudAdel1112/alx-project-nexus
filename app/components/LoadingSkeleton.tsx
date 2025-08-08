"use client";
import styled, { keyframes } from "styled-components";
import { MovieGrid, MovieCard } from "./MovieStyles";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonCard = styled(MovieCard)`
  background-color: #333;
  animation: ${shimmer} 1.5s linear infinite;
  background-image: linear-gradient(
    to right,
    #333 0%,
    #444 20%,
    #333 40%,
    #333 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
`;

export default function LoadingSkeleton() {
  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>Loading Movies...</h1>
      <MovieGrid>
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </MovieGrid>
    </div>
  );
}
