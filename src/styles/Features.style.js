import styled from 'styled-components';
import { Column } from '../GlobalStyle.style';
import Bg from '../assets/linear_bg_2.svg';
export const FeatureWrapper = styled.section`
  /* background: url(${Bg}) no-repeat;
  background-position: right;
  background-size: contain; */
  position: relative;
  &::before {
    content: '';
    background: #bc29e0;
    width: 100px;
    border-bottom-left-radius: 80%;
    height: 100vh;
    position: absolute;
    right: 0;

    filter: blur(90px);
  }
`;

export const FeaturesWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 90vh;
  padding: 20px 0;
  position: relative;

  ${Column} {
    .feature {
      border: 1px solid var(--text-bg-p);
      min-height: 140px;
      margin-bottom: 15px;
      padding: 20px 30px;
      border-radius: 15px;
      p {
        max-width: 40ch;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 40px;
      }
    }
  }
`;

export const FeatureHeading = styled.div`
  min-height: 450px;
  padding: 30px 40px;
  border-radius: 30px;
  margin-right: 30px;
  border: 1px solid var(--text-bg-p);
  box-sizing: border-box;
  position: relative;

  border-radius: 15px;

  h1 {
    margin-top: 20px;
    &::first-letter {
      margin-left: -5px;
    }
  }
  p {
    max-width: 400px;
    margin-top: 40px;
  }
  .social__links {
    display: flex;
    position: absolute;
    bottom: 0;
    margin-bottom: 40px;

    a {
      font-size: 40px;
      margin-right: 8px;
      color: rgba(0, 0, 0, 0.3);
      transition: all 0.5s ease;
      &:hover {
        color: rgba(0, 0, 0, 1);
        transition: all 0.3s ease;
      }
    }
  }
`;
