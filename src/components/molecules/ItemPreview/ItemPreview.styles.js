import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemAnimation = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  visibility: hidden;

  &.aos-animate {
    visibility: visible;
    animation: ${ItemAnimation} 0.6s;
  }

  @media (max-width: 639px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 280px;
  background-color: #f4f4f4;
  border-radius: 15px;
  cursor: pointer;
`;

export const Category = styled(Link)`
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
  color: #8f8f8f;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled(Link)`
  font-size: 15px;
  color: #606060;
  font-weight: 600;
  text-decoration: none;
`;

export const StartsWrapper = styled.div`
  display: flex;
  margin-top: 5px;
  color: #e3e3e3;
  gap: 3px;

  i {
    font-size: 11px;
  }
`;

export const Price = styled.span`
  color: #000;
  margin-top: 12px;
  font-weight: 700;
  font-size: 18px;
`;

export const Availability = styled.span`
  font-size: 14px;
  color: #797979;
  font-weight: 500;
  margin-top: 2px;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #000;
  border: none;
  font-size: 13px;
  gap: 5px;
  margin-top: 12px;
  user-select: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  outline: none;
  transition: opacity 0.3s;

  &:disabled {
    cursor: no-drop;
    opacity: 0.7;
  }
`;
