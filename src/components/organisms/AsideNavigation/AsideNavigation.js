import React, { useEffect } from 'react';
import {
  StyledLink,
  Wrapper,
} from 'components/organisms/AsideNavigation/AsideNavigation.styles';
import { CSSTransition } from 'react-transition-group';
import { useNavigation } from 'hooks/useNavigation';
import { useLocation } from 'react-router-dom';
import { useCart } from 'hooks/useCart';

const AsideNavigation = () => {
  const { visible, setVisible } = useNavigation();
  const location = useLocation();
  const { state } = useCart();

  const handleButtonClick = () => setVisible(false);

  useEffect(() => setVisible(false), [location, setVisible]);

  return (
    <CSSTransition
      in={visible}
      timeout={300}
      classNames="aside-nav"
      unmountOnExit
    >
      <Wrapper>
        <StyledLink to="/">Sklep</StyledLink>
        <StyledLink to="/kontakt">Kontakt</StyledLink>
        <StyledLink to="/koszyk">Koszyk ({state.length})</StyledLink>
        <StyledLink to="/regulamin">Regulamin</StyledLink>
        <StyledLink to="/polityka-prywatnosci">Polityka prywatności</StyledLink>

        <i className="fas fa-times" onClick={handleButtonClick} />
      </Wrapper>
    </CSSTransition>
  );
};

export default AsideNavigation;
