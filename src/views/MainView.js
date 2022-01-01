import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Routes, Route } from 'react-router-dom';
import IndexPage from 'pages/IndexPage';
import ProductPage from 'pages/ProductPage';
import ContactPage from 'pages/ConcactPage';
import StatutePage from 'pages/StatutePage';
import PrivacyPolicyPage from 'pages/PrivacyPolicyPage';
import CartPage from 'pages/CartPage';

const MainView = () => (
  <MainTemplate>
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/produkt/:id" element={<ProductPage />} />
      <Route path="/koszyk" element={<CartPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="/regulamin" element={<StatutePage />} />
      <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
    </Routes>
  </MainTemplate>
);

export default MainView;
