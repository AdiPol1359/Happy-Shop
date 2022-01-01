import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Category,
  Image,
  Price,
  StartsWrapper,
  Title,
  Wrapper,
  Availability,
} from 'components/molecules/ItemPreview/ItemPreview.styles';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'hooks/useCart';
import Aos from 'aos';

const ItemPreview = (props) => {
  const navigate = useNavigate();
  const { isInCart, addItemToCart } = useCart();

  const { id, category, title, price, availability } = props;

  const cartStatus = isInCart(id);

  const handleButtonClick = () => addItemToCart(props, 1);

  useEffect(() => Aos.init(), []);

  return (
    <Wrapper data-aos="animation" data-aos-offset="450" data-aos-once="true">
      <Image onClick={() => navigate(`/produkt/${id}`)} />
      <Category to="#">{category}</Category>
      <Title to={'/produkt/' + id}>{title}</Title>

      <StartsWrapper>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </StartsWrapper>

      <Price>{price} zł</Price>
      <Availability>Na magazynie: {availability} sztuk</Availability>
      <Button onClick={handleButtonClick} disabled={cartStatus}>
        <i className="fas fa-cart-plus" />
        Dodaj do koszyka
        {cartStatus && ' (posiadane)'}
      </Button>
    </Wrapper>
  );
};

ItemPreview.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  availability: PropTypes.number.isRequired,
};

export default ItemPreview;
