import React, { useState } from 'react';
import ProductGallery from 'components/organisms/ProductGallery/ProductGallery';
import {
  StyledSpan,
  StarsWrapper,
  Wrapper,
  ProductDescription,
  StyledNumber,
  StyledForm,
  Availability,
  StyledButton,
} from 'pages/ProductPage.styles';
import PageTitle from 'components/atoms/PageTitle/PageTitle';
import { useItems } from 'hooks/useItems';
import { useParams } from 'react-router-dom';
import { useCart } from 'hooks/useCart';
import Ripple from 'components/atoms/Ripple/Ripple';

const ProductPage = () => {
  const [amount, setAmount] = useState(1);

  const { id } = useParams();
  const { isLoading, getItemById } = useItems();
  const { isInCart, addItemToCart } = useCart();

  const item = getItemById(id);
  const cartStatus = isInCart(id);

  const handleInputChange = (event) => {
    const { value } = event.target;

    if (value === '' || (value >= 1 && value <= item.availability)) {
      setAmount(value);
    }
  };

  const handleButtonClick = () => addItemToCart(item, amount);

  if (isLoading) {
    return <Ripple />;
  }

  if (!item) {
    return 'Nie znaleziono przedmiotu!';
  }

  return (
    <Wrapper>
      <PageTitle>Informacje o produkcie</PageTitle>
      <ProductGallery />
      <StyledSpan>{item.title}</StyledSpan>
      <StarsWrapper>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </StarsWrapper>
      <StyledSpan>{item.price} zł</StyledSpan>
      <ProductDescription>{item.description}</ProductDescription>

      <div>
        <StyledForm>
          <StyledNumber
            type="number"
            value={amount}
            onChange={handleInputChange}
            disabled={cartStatus}
          />
          <StyledButton onClick={handleButtonClick} disabled={cartStatus}>
            Dodaj do koszyka {cartStatus && ' (posiadane)'}
          </StyledButton>
        </StyledForm>
        <Availability>Pozostało: {item.availability} sztuk</Availability>
      </div>
    </Wrapper>
  );
};

export default ProductPage;
