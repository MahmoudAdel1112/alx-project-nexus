'use client';

import { useTheme } from '@/app/lib/ThemeProvider';
import styled from 'styled-components';
import { Sun, Moon } from 'lucide-react';

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.headerText};

  &:hover {
    opacity: 0.8;
  }
`;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </ToggleButton>
  );
}
