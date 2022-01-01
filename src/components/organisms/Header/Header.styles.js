import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 500px;
  min-height: 40vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-image: url('${({ url }) => url}');
    background-size: cover;
    background-position: center;
    opacity: 0.25;
    filter: grayscale(1);
    z-index: -1;
  }
`;

export const Title = styled.span`
  font-size: 42px;
  font-weight: 800;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
`;

export const Subtitle = styled.span`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;
