import styled from 'styled-components';
import { Column, Typography } from '../GlobalStyle.style';
import Bg from '../assets/ellipse_3.svg';

export const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  align-items: center;
  position: relative;
  .bg {
    background: url(${Bg}) no-repeat;
    background-size: contain;
    /* background-position-y: -100px; */
    background-position: right;
    height: 400px;
    width: 100%;
    top: -70vh;
    right: -350px;
    opacity: 0.09;
    z-index: -1;
    transform: rotate(95deg);
    position: absolute;
  }
  ${Column} {
    &:first-child {
      ${Typography} {
        max-width: 600px;
      }
    }
    p {
      max-width: 30ch !important;
      margin-left: 5px;
      margin: 5px 0 15px 5px;
      /* margin-top: -33px; */
    }
    a {
      display: flex;
      width: max-content;
    }
    &:last-child {
      img {
        width: 100%;
        height: 400px;
        object-fit: contain;
      }
    }
  }

  /* @media screen and (min-width: 320px) and (max-width: 480px) {
    //Mobile devices
    background: green;
    width: 100%;
    flex-direction: column;
    padding: 0 20px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    //iPads, Tablets
    background: yellow;
    width: 100%;
    flex-direction: column;
    padding: 0 10px;
  } */
`;

export const ImageWrapper = styled.div``;
