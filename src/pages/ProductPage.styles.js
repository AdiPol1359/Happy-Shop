import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 22px;
  text-align: center;

  @media (max-width: 429px) {
    font-size: 20px;
  }
`;

export const StarsWrapper = styled.div`
  display: flex;
  gap: 3px;
  color: #e3e3e3;

  i {
    font-size: 15px;
  }
`;

export const ProductDescription = styled.div`
  max-width: 1000px;
  padding: 0 10px;
  text-align: center;
  font-size: 14px;
  color: #424242;
`;

export const StyledForm = styled.div`
  display: flex;
  gap: 8px;
`;

export const Availability = styled.span`
  font-size: 13px;
  display: block;
  margin-top: 4px;
  color: #5f5f5f;
`;

export const StyledButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  width: 200px;
  height: 53px;
  background-color: #000;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;

  &:disabled {
    opacity: 0.7;
    cursor: no-drop;
  }
`;

export const StyledNumber = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  width: 70px;
  outline: none;
  //border-radius: 10px;
  border-radius: 5px;
  border: none;
  background-color: #e3e3e3;
  color: #444444;
  text-align: center;

  &:disabled {
    opacity: 0.5;
  }
`;
