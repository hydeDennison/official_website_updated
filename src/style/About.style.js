import styled from 'styled-components';
import { Column, Typography } from '../GlobalStyle.style';

export const AboutWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;

  ${Column} {
    &:first-child {
      ${Typography} {
        &:nth-child(1) {
          margin-left: 5px;
        }
        &:nth-child(2) {
          max-width: 10ch;
        }
        &:nth-child(3) {
          max-width: 43ch;
          margin: 20px 0px 0px 5px;
        }
      }
    }
  }
`;
