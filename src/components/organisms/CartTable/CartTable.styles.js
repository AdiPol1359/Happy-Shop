import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: auto;
`;

export const StyledTable = styled.table`
  height: fit-content;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  width: 100%;
  min-width: 850px;

  thead {
    font-weight: 600;
  }

  td {
    text-align: center;
    padding: 15px 20px;
  }

  td:nth-child(2),
  td:nth-child(3),
  td:nth-child(4) {
    width: 100px;

    input {
      width: 100%;
    }
  }
`;
