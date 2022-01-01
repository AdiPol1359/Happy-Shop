import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainView from 'views/MainView';

const Root = () => (
  <Routes>
    <Route path="*" element={<MainView />} />
  </Routes>
);

export default Root;
