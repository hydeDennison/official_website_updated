import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
   font-family: "Poppins";
   src: url("/fonts/Poppins-Black.ttf") format("truetype");
   src: url("/fonts/Poppins-Bold.ttf") format("truetype");
   src: url("/fonts/Poppins-ExtraBold.ttf") format("truetype");
   src: url("/fonts/Poppins-Light.ttf") format("truetype");
   src: url("/fonts/Poppins-Medium.ttf") format("truetype");
   src: url("/fonts/Poppins-Regular.ttf") format("truetype");
};
:root{  
  --primary-bg:#4500A0;
}
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
  width: ${(props) =>
    props.mxWidth === 'sm'
      ? '400px'
      : props.mxWidth === 'md'
      ? '800px'
      : props.mxWidth === 'lg'
      ? '1100px'
      : '100%'};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

export const Typography = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : 'normal')};
  color: ${(props) => (props.color ? props.color : '#121212')};
`;

export default GlobalStyle;
