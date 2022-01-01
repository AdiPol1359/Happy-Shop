import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import {
  ContentWrapper,
  PageWrapper,
} from 'components/templates/MainTemplate/MainTemplate.styles';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import AsideNavigation from 'components/organisms/AsideNavigation/AsideNavigation';

const MainTemplate = ({ children }) => (
  <>
    <Navigation />
    <AsideNavigation />
    <ContentWrapper>
      <Header />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </ContentWrapper>
  </>
);

export default MainTemplate;
