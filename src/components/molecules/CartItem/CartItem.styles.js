import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const StyledIcon = styled.i`
  cursor: pointer;
  color: #525252;
`;

export const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f4f4f4;
  border-radius: 10px;
`;

export const ItemName = styled(Link)`
  font-size: 16px;
  color: #3e3e3e;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
