import styled from 'styled-components';
import { Column, Typography } from '../GlobalStyle.style';

export const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  align-items: center;

  ${Column} {
    &:first-child {
      ${Typography} {
        max-width: 500px;
      }
      p {
        max-width: 34ch !important;
        margin-left: 5px;
        margin: 5px 0 15px 5px;
        /* margin-top: -33px; */
      }
    }
    &:last-child {
      img {
        width: 100%;
        height: 500px;
        object-fit: contain;
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
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
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    //Small screens, laptops
    background: purple;
    width: 100%;
    flex-direction: column;
    /* padding: 0 10px; */
  }
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    //Desktops, large screens
    background: gray;
  }
`;

export const ImageWrapper = styled.div``;
