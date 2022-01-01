import React from 'react';
import {
  ItemImage,
  ItemName,
  StyledIcon,
  Wrapper,
} from 'components/molecules/CartItem/CartItem.styles';
import { useCart } from 'hooks/useCart';

const CartItem = ({ id, title }) => {
  const { removeItemFromCart } = useCart();

  const handleIconClick = () => removeItemFromCart(id);

  return (
    <Wrapper>
      <StyledIcon className="fas fa-times" onClick={handleIconClick} />
      <ItemImage />
      <ItemName to={`/produkt/${id}`}>{title}</ItemName>
    </Wrapper>
  );
};

export default CartItem;
