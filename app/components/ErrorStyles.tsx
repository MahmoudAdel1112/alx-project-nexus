'use client';

import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
`;

export const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const RetryButton = styled.button`
  background-color: #f0ad4e;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ec971f;
  }
`;
