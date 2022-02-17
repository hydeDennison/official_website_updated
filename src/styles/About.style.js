import styled from 'styled-components';
import { Column, Typography } from '../GlobalStyle.style';

export const AboutWrapper = styled.div`
  width: 100%;
  height: 80vh;
  /* margin-bottom: 200px; */
  display: flex;

  ${Column} {
    &:first-child {
      ${Typography} {
        &:nth-child(1) {
          margin-left: 5px;
        }
        &:nth-child(2) {
          max-width: 10ch;
          &::first-letter {
            margin-left: -8px;
          }
        }
        &:nth-child(3) {
          max-width: 600px;
          margin: 20px 0px 0px 5px;
        }
      }
    }
    &:last-child {
      position: relative;
      &::before {
        content: '';
        background: #bc29e0;
        width: 200px;
        height: 200px;
        left: 100px;
        border-radius: 50%;
        position: absolute;
        filter: blur(80px);
      }
      img {
        height: 350px;
        width: 100%;
        position: absolute;
        left: -40px;
        top: -20px;
        object-fit: contain;
      }
    }
  }
`;
