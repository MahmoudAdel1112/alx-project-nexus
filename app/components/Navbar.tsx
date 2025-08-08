'use client';

import Link from 'next/link';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const Nav = styled.nav`
  background: ${({ theme }) => theme.headerBackground};
  color: ${({ theme }) => theme.headerText};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.50s linear;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.headerText};
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <div>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/favorites">Favorites</NavLink>
      </div>
      <ThemeToggle />
    </Nav>
  );
}
