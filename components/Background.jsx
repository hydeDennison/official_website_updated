import { Background__wrapper } from '../styles/background.style';

const Background = ({ children }) => {
  return (
    <>
      <Background__wrapper>
        <div className="bg"></div>
        <div className="bg"></div>
        <div className="bg"></div>
        <div className="bg"></div>
        {children}
      </Background__wrapper>
    </>
  );
};

export default Background;
