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
`;

export const ImageWrapper = styled.div``;
