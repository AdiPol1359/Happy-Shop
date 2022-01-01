import React from 'react';
import styled from 'styled-components';

const GalleryItem = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f4f4f4;
  border-radius: 20px;

  @media (max-width: 649px) {
    width: calc(100vw - 25px);
  }
`;

export default GalleryItem;
