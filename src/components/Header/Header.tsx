import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Container, Flex } from '../../styles/GlobalStyles';
import principalLogo from '../../assets/principal.svg';

interface HeaderStyleProps {
  $isHome: boolean;
  $isScrolled: boolean;
}

const HeaderContainer = styled.header<HeaderStyleProps>`
  padding: ${theme.spacing.md} 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;

  ${props => props.$isHome ? `
    background: transparent;
    border-bottom: none;
  ` : `
    background-color: rgba(250, 252, 250, 0.95);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid ${theme.colors.border};
  `}
`;

const Logo = styled.div<{ $light?: boolean }>`
  img {
    height: 40px;
    width: auto;
    transition: ${theme.transitions.normal};
    ${props => props.$light && `filter: brightness(0) invert(1);`}
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

interface NavLinkStyleProps {
  $isActive: boolean;
  $light?: boolean;
}

const NavLink = styled(Link)<NavLinkStyleProps>`
  font-family: ${theme.fonts.body};
  font-weight: ${props => props.$isActive ? 600 : 500};
  font-size: ${theme.fluid.body};
  color: ${props => {
    if (props.$light) {
      return props.$isActive ? theme.colors.accent : 'rgba(255, 255, 255, 0.8)';
    }
    return props.$isActive ? theme.colors.primary : theme.colors.text.secondary;
  }};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  transition: ${theme.transitions.normal};
  position: relative;
  text-transform: capitalize;
  letter-spacing: -0.01em;

  &:hover {
    color: ${props => props.$light ? '#fff' : theme.colors.text.primary};
    background-color: ${props => props.$light ? theme.colors.primary : theme.colors.backgroundSecondary};
  }

  ${props => props.$isActive && `
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
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string): boolean => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const useLightMode = isHome;

  return (
    <HeaderContainer $isHome={isHome} $isScrolled={isScrolled}>
      <Container>
        <Flex justify="space-between" align="center">
          <Logo $light={useLightMode}>
            <Link to="/">
              <img src={principalLogo} alt="Victor's Forge" />
            </Link>
          </Logo>
          
          <Nav>
            <ul>
              <li>
                <NavLink to="/" $isActive={isActive('/')} $light={useLightMode}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/sobre" $isActive={isActive('/sobre')} $light={useLightMode}>
                  Sobre mim
                </NavLink>
              </li>
              <li>
                <NavLink to="/cases" $isActive={isActive('/cases')} $light={useLightMode}>
                  Cases
                </NavLink>
              </li>
              <li>
                <NavLink to="/conteudos" $isActive={isActive('/conteudos')} $light={useLightMode}>
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
