import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  height: fit-content;
  padding: 22px;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  font-size: 12px;

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  margin-bottom: 20px;
  text-align: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSpan = styled.span`
  color: #323232;
  font-weight: 600;
  font-size: 14px;
`;

export const Total = styled.span`
  font-size: 16px;
  color: #000000;
  font-weight: 700;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  background-color: #000;
  border: none;
  color: #fff;
  font-weight: 600;
  gap: 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`;
