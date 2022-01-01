import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  padding: 40px;
  gap: 30px;
  margin-top: 35px;

  @media (max-width: 1199px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ResultWrapper = styled.div`
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #000;
  width: 200px;
`;

export const StyledSpan = styled.span`
  font-size: 14px;
`;
