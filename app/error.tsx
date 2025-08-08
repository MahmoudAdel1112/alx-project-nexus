'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import {
  ErrorContainer,
  ErrorTitle,
  ErrorMessage,
  RetryButton,
} from '@/app/components/ErrorStyles';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorContainer>
      <ErrorTitle>Something went wrong!</ErrorTitle>
      <ErrorMessage>{error.message}</ErrorMessage>
      <RetryButton
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </RetryButton>
    </ErrorContainer>
  );
}
