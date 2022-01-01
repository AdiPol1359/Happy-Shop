import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ItemsWrapper,
  Logo,
  StyledNav,
  StyledNavLink,
} from 'components/organisms/Navigation/Navigation.styles';
import { useNavigation } from 'hooks/useNavigation';
import CartIcon from 'components/atoms/CartIcon/CartIcon';

const Navigation = () => {
  const navigate = useNavigate();
  const { setVisible } = useNavigation();

  const handleIconClick = () => {
    const { innerWidth } = window;

    if (499 >= innerWidth) {
      setVisible(true);
    }
  };

  return (
    <StyledNav>
      <Logo onClick={() => navigate('/')}>Happy Shop</Logo>
      <ItemsWrapper>
        <StyledNavLink to="/">Sklep</StyledNavLink>
        <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
        <CartIcon />
        <i className="fas fa-search" />
      </ItemsWrapper>

      <i className="fas fa-bars" onClick={handleIconClick} />
    </StyledNav>
  );
};
export default Navigation;
