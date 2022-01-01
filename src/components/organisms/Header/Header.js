import React from 'react';
import { Subtitle, Title, Wrapper } from './Header.styles';

import background from 'assets/images/header-background.jpg';

const Header = () => (
  <Wrapper url={background}>
    <Title>Happy Shop</Title>
    <Subtitle>Najlepszy sklep odzieżowy w Polsce!</Subtitle>
  </Wrapper>
);

export default Header;
