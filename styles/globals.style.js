import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
   font-family: "Poppins";
   src: url("/fonts/Poppins-Black.ttf") format("truetype");
};
  * {
  box-sizing: border-box;
  word-wrap: break-word;
  margin:0;
  padding:0;
  }
  html{
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
  }
  body {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: .02rem;
  }
  a {
    color: #bf9e5f;
    text-decoration: none;
    cursor: pointer;
  }
  img {
    border: 0px;
    width: 100%;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

export const Typography = styled.span`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'regular')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : 'normal')};
  color: ${(props) => (props.color ? props.color : 'red')};
`;

export default GlobalStyle;
