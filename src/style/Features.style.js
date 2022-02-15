import styled from 'styled-components';
import { Column } from '../GlobalStyle.style';
export const FeaturesWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 90vh;
  padding: 20px 0;
  position: relative;

  ${Column} {
    .feature {
      border: 1px solid #eee;
      min-height: 140px;
      margin-bottom: 15px;
      padding: 20px 30px;
      border-radius: 25px;

      p {
        max-width: 40ch;
      }
    }
  }
`;

export const FeatureHeading = styled.div`
  min-height: 450px;
  padding: 30px 40px;
  border-radius: 30px;
  margin-right: 30px;
  border: 1.5px solid #eee;
  box-sizing: border-box;
  position: relative;
  border-radius: 25px;

  h1 {
    margin-top: 20px;
  }
  p {
    max-width: 400px;
    margin: 20px 0;
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
