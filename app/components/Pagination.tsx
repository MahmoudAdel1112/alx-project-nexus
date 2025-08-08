'use client';

import Link from 'next/link';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const PageLink = styled(Link)`
  background-color: #f0ad4e;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  margin: 0 0.5rem;

  &:hover {
    background-color: #ec971f;
  }

  &[aria-disabled='true'] {
    background-color: #ccc;
    pointer-events: none;
  }
`;

interface PaginationProps {
  currentPage: number;
}

export default function Pagination({ currentPage }: PaginationProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage + 1;

  return (
    <PaginationContainer>
      <PageLink href={`/?page=${prevPage}`} aria-disabled={currentPage <= 1}>
        Previous
      </PageLink>
      <PageLink href={`/?page=${nextPage}`}>Next</PageLink>
    </PaginationContainer>
  );
}
