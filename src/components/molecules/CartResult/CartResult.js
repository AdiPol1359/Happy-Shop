import React, { useEffect, useState } from 'react';
import {
  PriceWrapper,
  StyledButton,
  StyledSpan,
  Title,
  Total,
  Wrapper,
} from 'components/molecules/CartResult/CartResult.styles';
import { useCart } from 'hooks/useCart';

const CartResult = () => {
  const { cartItems, getTotalPrice } = useCart();
  const [price, setPrice] = useState(getTotalPrice());

  useEffect(() => setPrice(getTotalPrice()), [cartItems, getTotalPrice]);

  return (
    <Wrapper>
      <Title>Podsumowanie</Title>

      <PriceWrapper>
        <StyledSpan>Łącznie</StyledSpan>
        <Total>{price} zł</Total>
      </PriceWrapper>

      <StyledButton>
        <i className="far fa-bookmark" />
        Zrealizuj zamówienie
      </StyledButton>
    </Wrapper>
  );
};

export default CartResult;
