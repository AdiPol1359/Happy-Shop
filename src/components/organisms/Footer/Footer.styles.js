import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  background-color: #f8f9fa;
  padding: 0 80px 40px 80px;
  color: #232323;

  @media (max-width: 629px) {
    padding: 0 20px 25px 20px;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
  padding: 50px 0;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;

  i {
    font-size: 35px;

    @media (max-width: 799px) {
      font-size: 30px;
    }
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  font-size: 15px;
  gap: 20px;

  @media (max-width: 799px) {
    font-size: 12px;
    gap: 10px;
  }

  @media (max-width: 525px) {
    flex-direction: column;
  }
`;

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #232323;

  @media (max-width: 799px) {
    font-size: 12px;
  }
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const StyledSpan = styled.span`
  font-size: 14px;
  font-weight: 500;

  a {
    font-weight: 600;
    color: #232323;
  }
`;
