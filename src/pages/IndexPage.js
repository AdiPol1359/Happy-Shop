import React from 'react';
import PageTitle from 'components/atoms/PageTitle/PageTitle';
import ItemPreview from 'components/molecules/ItemPreview/ItemPreview';
import { ItemsWrapper } from 'pages/IndexPage.styles';
import { useItems } from 'hooks/useItems';
import Ripple from 'components/atoms/Ripple/Ripple';

const IndexPage = () => {
  const { items, isLoading } = useItems();

  if (isLoading) {
    return <Ripple />;
  }

  return (
    <>
      <PageTitle>Dostępne produkty</PageTitle>

      <ItemsWrapper>
        {items.map((item) => (
          <ItemPreview key={item.id} {...item} />
        ))}
      </ItemsWrapper>
    </>
  );
};

export default IndexPage;
