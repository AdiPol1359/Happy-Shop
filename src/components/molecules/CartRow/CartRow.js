import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartItem from 'components/molecules/CartItem/CartItem';
import { useCart } from 'hooks/useCart';

const CartRow = ({ id, title, price, quantity, availability }) => {
  const [value, setValue] = useState(quantity);
  const { updateItemQuantity } = useCart();

  const handleInputChange = (event) => {
    const { value } = event.target;

    if (value === '' || (value >= 1 && value <= availability)) {
      setValue(value);
      updateItemQuantity(id, value);
    }
  };

  return (
    <tr>
      <td>
        <CartItem id={id} title={title} />
      </td>
      <td>{price} zł</td>
      <td>
        <input
          type="number"
          placeholder="Ilość"
          value={value}
          onChange={handleInputChange}
        />
      </td>
      <td>{price * value} zł</td>
    </tr>
  );
};

CartRow.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  availability: PropTypes.number.isRequired,
};

export default CartRow;
