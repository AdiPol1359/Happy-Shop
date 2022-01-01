import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: background-color 0.5s;

  &.aside-nav-enter {
    opacity: 0;
  }

  &.aside-nav-enter-active {
    opacity: 1;
    transition: opacity 0.3s;
  }

  &.aside-nav-exit {
    opacity: 1;
  }

  &.aside-nav-exit-active {
    opacity: 0;
    transition: opacity 0.3s;
  }

  i.fa-times {
    position: absolute;
    top: 25px;
    right: 30px;
    font-size: 25px;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  text-transform: uppercase;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
`;
