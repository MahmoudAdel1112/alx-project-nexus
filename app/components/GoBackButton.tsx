'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const BackButton = styled.button`
  background-color: #555;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: #777;
  }
`;

export default function GoBackButton() {
  const router = useRouter();
  return <BackButton onClick={() => router.back()}>← Go Back</BackButton>;
}
