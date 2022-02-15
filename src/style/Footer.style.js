import styled from 'styled-components';
import { Column } from '../GlobalStyle.style';

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 30px;
  ${Column} {
    display: flex;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: rgba(18, 30, 73, 0.3);
    transition: all 0.5s ease-in-out;

    &:hover {
      color: rgba(18, 30, 73, 1);
      transition: all 0.5s ease-in-out;
    }
    &::after {
      content: '';
      border-right: 1px solid #eee;
      padding-left: 3px;
    }

    &:last-child {
      &::after {
        content: '';
        border-right: none;
      }
    }
  }
`;
