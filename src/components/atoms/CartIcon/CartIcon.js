import React from 'react';
import styled from 'styled-components';
import { useCart } from 'hooks/useCart';
import { useNavigate } from 'react-router-dom';

const StyledIcon = styled.i`
  display: block;
  position: relative;
`;

export const Counter = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  font-size: 12px;
  font-weight: 700;
  background-color: #000;
  color: #fff;
`;

const CartIcon = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  return (
    <StyledIcon
      className="fas fa-shopping-cart"
      onClick={() => navigate('/koszyk')}
    >
      <Counter>{state.length}</Counter>
    </StyledIcon>
  );
};

export default CartIcon;
