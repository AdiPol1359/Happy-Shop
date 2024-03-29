import React from 'react';
import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;

  div {
    position: absolute;
    border: 4px solid #b3b3b3;
    opacity: 1;
    border-radius: 50%;
    animation: ${Animation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

const Ripple = () => (
  <Wrapper>
    <div />
    <div />
  </Wrapper>
);

export default Ripple;
