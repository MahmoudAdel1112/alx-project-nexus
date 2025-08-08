'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const NotFoundMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const HomeLink = styled(Link)`
  background-color: #f0ad4e;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    background-color: #ec971f;
  }
`;
