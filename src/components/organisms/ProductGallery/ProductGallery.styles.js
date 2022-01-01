import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SwiperWrapper = styled.div`
  width: 940px;

  @media (max-width: 969px) {
    width: 620px;
  }

  @media (max-width: 649px) {
    width: calc(100vw - 25px);
  }
`;
