import React from 'react';
import {
  Wrapper,
  StyledTable,
} from 'components/organisms/CartTable/CartTable.styles';
import { useCart } from 'hooks/useCart';
import CartRow from 'components/molecules/CartRow/CartRow';

const CartTable = () => {
  const { state } = useCart();

  return (
    <Wrapper>
      <StyledTable>
        <thead>
          <tr>
            <td>Produkt</td>
            <td>Cena</td>
            <td>Ilość</td>
            <td>Razem</td>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => (
            <CartRow key={item.id} {...item} />
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default CartTable;
