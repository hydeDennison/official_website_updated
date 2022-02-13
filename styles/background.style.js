import styled from 'styled-components';

export const Background__wrapper = styled.section`
  background: rgba(82, 128, 255, 0.05);
  width: 100%;
  height: 100%;
  max-height: 100%;
  min-width: 100vw;
  position: relative;

  .bg {
    filter: blur(150px);

    &:nth-child(1) {
      width: 500px;
      height: 500px;
      background: rgba(82, 128, 255, 0.5);
      position: absolute;
      right: 0;
      /* transform: rotate(-7.04deg); */
    }
    &:nth-child(2) {
      background: rgba(174, 28, 187, 0.8);
      /* transform: rotate(-101.47deg); */
      width: 800px;
      height: 400px;
      position: absolute;
      right: 200px;
    }
    &:nth-child(3) {
      background: rgba(255, 96, 195, 1);
      width: 200px;
      height: 100px;
      left: 250px;
      position: absolute;
    }
    &:nth-child(4) {
      background: rgba(239, 210, 242, 0.2);
      bottom: 0;
      width: 100%;
      height: 200px;
      position: absolute;
    }
  }
`;
