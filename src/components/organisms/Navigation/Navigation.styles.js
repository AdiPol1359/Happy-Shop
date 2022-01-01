import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 0 11px -4px rgba(0, 0, 0, 0.2);
  z-index: 999;

  i.fa-bars {
    display: none;
  }

  @media (max-width: 499px) {
    i.fa-bars {
      display: block;
    }
  }
`;

export const Logo = styled.span`
  font-size: 20px;
  font-weight: 900;
  font-style: italic;
  color: #000;
  user-select: none;
  cursor: pointer;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;

  i {
    cursor: pointer;
  }

  @media (max-width: 499px) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
`;
