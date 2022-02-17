import styled from 'styled-components';
const BackgroundWrapper = styled.div`
  width: 100%;
  position: relative;

  .bg {
    position: absolute;
    filter: blur(70px);
    &:nth-child(1) {
      background: linear-gradient(180deg, #4500a0 0%, #9e00ff 100%);
      width: 600px;
      height: 90vh;
      left: 10px;
    }
    &:nth-child(2) {
      background: #bc29e0;
      width: 300px;
      height: 300px;
      top: -30px;
    }
    &:nth-child(3) {
      background: #fce8a5;
      width: 300px;
      height: 300px;
      top: -30px;
      left: 450px;
    }
    &:nth-child(4) {
      background: #ffd549;
      width: 200px;
      height: 300px;
      top: 200px;
      left: 400px;
    }
    &:nth-child(5) {
      background: #4500a0;
      width: 300px;
      height: 200px;
      top: 40vh;
      left: 80px;
    }
  }
`;
const Background = ({ children }) => {
  return (
    <>
      <BackgroundWrapper>
        <div className="bg"></div>
        <div className="bg"></div>
        <div className="bg"></div>
        <div className="bg"></div>
        <div className="bg"></div>
        {children}
      </BackgroundWrapper>
    </>
  );
};

export default Background;
