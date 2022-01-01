import React from 'react';
import PageTitle from 'components/atoms/PageTitle/PageTitle';
import CartTable from 'components/organisms/CartTable/CartTable';
import { ContentWrapper } from 'pages/CartPage.styles';
import CartResult from 'components/molecules/CartResult/CartResult';

const CartPage = () => (
  <>
    <PageTitle>Koszyk</PageTitle>
    <ContentWrapper>
      <CartTable />
      <CartResult />
    </ContentWrapper>
  </>
);

export default CartPage;
