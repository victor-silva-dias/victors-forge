import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Container, Flex } from '../../styles/GlobalStyles';
import principalLogo from '../../assets/principal.svg';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.backgroundPure};
  border-bottom: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.sm} 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  background-color: rgba(250, 252, 250, 0.95);
  transition: ${theme.transitions.normal};
`;

const Logo = styled.div`
  img {
    height: 40px;
    width: auto;
    transition: ${theme.transitions.normal};
  }
  
  &:hover img {
    transform: scale(1.02);
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: ${theme.spacing.lg};
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    ul {
      gap: ${theme.spacing.md};
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    ul {
      gap: ${theme.spacing.sm};
    }
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  font-family: ${theme.fonts.body};
  font-weight: ${props => props.$isActive ? 600 : 500};
  font-size: ${theme.fluid.body};
  color: ${props => props.$isActive ? theme.colors.primary : theme.colors.text.secondary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  transition: ${theme.transitions.normal};
  position: relative;
  text-transform: capitalize;
  letter-spacing: -0.01em;

  &:hover {
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.backgroundSecondary};
  }

  ${props => props.$isActive && `
    color: ${theme.colors.primary};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background-color: ${theme.colors.accent};
      border-radius: ${theme.borderRadius.full};
    }
  `}

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.9rem;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.85rem;
    padding: ${theme.spacing.xs} ${theme.spacing.xs};
  }
`;

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <HeaderContainer>
      <Container>
        <Flex justify="space-between" align="center">
          <Logo>
            <Link to="/">
              <img src={principalLogo} alt="Victor's Forge" />
            </Link>
          </Logo>
          
          <Nav>
            <ul>
              <li>
                <NavLink to="/" $isActive={isActive('/')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/sobre" $isActive={isActive('/sobre')}>
                  Sobre mim
                </NavLink>
              </li>
              <li>
                <NavLink to="/cases" $isActive={isActive('/cases')}>
                  Cases
                </NavLink>
              </li>
              <li>
                <NavLink to="/conteudos" $isActive={isActive('/conteudos')}>
                  Conteúdos
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Flex>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
