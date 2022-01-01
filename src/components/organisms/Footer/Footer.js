import React from 'react';
import {
  IconsWrapper,
  InformationWrapper,
  ItemsWrapper,
  LinksWrapper,
  StyledFooter,
  StyledLink,
  StyledSpan,
} from 'components/organisms/Footer/Footer.styles';

const Footer = () => (
  <StyledFooter>
    <ItemsWrapper>
      <IconsWrapper>
        <i
          className="fab fa-instagram"
          onClick={() =>
            window.open('https://www.instagram.com/adipol_pcode/', '_blank')
          }
        />
        <i
          className="fab fa-facebook"
          onClick={() =>
            window.open('https://facebook.com/AdiPol1359', '_blank')
          }
        />
      </IconsWrapper>

      <LinksWrapper>
        <StyledLink to="/">Sklep</StyledLink>
        <StyledLink to="/kontakt">Kontakt</StyledLink>
        <StyledLink to="/regulamin">Regulamin</StyledLink>
        <StyledLink to="/polityka-prywatnosci">Polityka prywatności</StyledLink>
      </LinksWrapper>
    </ItemsWrapper>

    <InformationWrapper>
      <StyledSpan>
        ❤️ Happy Shop - &copy; All rights reserved 2022 ❤️
      </StyledSpan>
      <StyledSpan>
        Created by:{' '}
        <a
          href="https://www.instagram.com/adipol_pcode/"
          target="_blank"
          rel="noreferrer"
        >
          AdiPol1359
        </a>
      </StyledSpan>
    </InformationWrapper>
  </StyledFooter>
);

export default Footer;
