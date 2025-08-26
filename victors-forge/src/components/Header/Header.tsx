import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Container, Flex } from '../../styles/GlobalStyles';
import principalLogo from '../../assets/principal.svg';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.md} 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: ${theme.shadows.medium};
`;

const Logo = styled.div`
  img {
    height: 48px;
    width: auto;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: ${theme.spacing.xl};
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    ul {
      gap: ${theme.spacing.md};
    }
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  font-family: ${theme.fonts.heading};
  font-weight: 500;
  font-size: 1.1rem;
  color: ${props => props.$isActive ? theme.colors.accent : theme.colors.text.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${theme.colors.action};
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${props => props.$isActive && `
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 2px;
      background-color: ${theme.colors.accent};
      border-radius: 2px;
    }
  `}

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
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
