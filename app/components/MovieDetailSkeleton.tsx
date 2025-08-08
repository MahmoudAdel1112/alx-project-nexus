'use client';
import styled, { keyframes } from 'styled-components';
import {
  PageContainer,
  MovieDetailsContainer,
  PosterContainer,
  MovieInfo,
} from './MovieIdPageStyles';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonPoster = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 8px;
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

const SkeletonTitle = styled.div`
  width: 70%;
  height: 2.5rem;
  margin-bottom: 1rem;
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

const SkeletonText = styled.div`
  width: 100%;
  height: 1rem;
  margin-bottom: 0.5rem;
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

export default function MovieDetailSkeleton() {
  return (
    <PageContainer>
      <MovieDetailsContainer>
        <PosterContainer>
          <SkeletonPoster />
        </PosterContainer>
        <MovieInfo>
          <SkeletonTitle />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText style={{ width: '80%' }} />
        </MovieInfo>
      </MovieDetailsContainer>
    </PageContainer>
  );
}
