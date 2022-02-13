import styled from 'styled-components';

export const Swap__screen_wrapper = styled.div`
  position: relative;
  max-width: 400px;
  min-height: 400px;
  background: linear-gradient(
    190.57deg,
    rgba(255, 255, 255, 0.56) 19.25%,
    rgba(248, 248, 255, 0.71) 54.39%,
    rgba(255, 255, 255, 0.59) 90.02%
  );
  box-shadow: 0 25px -45px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(19px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;

  display: flex;
  border-radius: 10px;
  padding: 20px;
  /* border: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
  margin-bottom: 80px;
  flex-direction: column;
`;

export const Swap__screen__header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-between;
  margin-bottom: 20px;

  .Swap__screen__setting {
    cursor: pointer;
    margin-right: 8px;
  }
`;

export const Swap__screen__body = styled.div`
  padding: 5px;
  width: 100%;

  .Swap__from {
    margin: 5px 10px;
  }
`;
export const Swap__screen__container = styled.div`
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  border-radius: 10px;
  min-height: 50px;
  border: 1px solid #cedaff;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
`;
export const Swap__form = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Swap__token = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
`;

export const Swap__token__form = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #fcfcfc;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 8px;
  align-items: center;
`;

export const Swap__token__select = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  cursor: pointer;

  .Swap__token__icon {
    margin-top: 3px;
    margin-right: 8px;
  }
  .Swap__token__label {
    display: flex;
    margin-top: 2px;
    margin-right: 8px;
  }
  span {
    margin-top: 4px;
    color: #ccc;
  }
`;
export const Swap__token__input = styled.div`
  display: flex;

  .Swap__token__input__value {
    display: flex;
    width: 100%;
    align-items: center;
    input {
      text-align: right;
      background: transparent;
      border: none;
      outline: none;
      margin-right: 8px;
      font-size: 12px;
      color: #ccc !important;
    }
  }
  .Swap__token__input__max {
    display: flex;
    margin-right: 5px;
    button {
      border: 1px solid #4500a0;
      border-radius: 4px;
      padding: 2px 5px;
      background: transparent;
      font-size: 10px;
      color: #4500a0;
      cursor: pointer;
    }
  }
`;
export const Swap__token__selected__balance = styled.div`
  text-align: right;
  margin-top: 5px;
  width: 100%;
  padding: 0 10px;
  p {
    text-align: right;
    color: #ccc;
  }
`;

export const Swap__toggle = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  .Swap__toggle__bg {
    background: var(--primary-bg);
    border-radius: 50%;
    padding: 4px;
    width: 20px;
    cursor: pointer;
    height: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    img {
      object-fit: contain;
    }
  }
`;

export const Swap__btn = styled.div`
  padding: 20px 0;
  width: 100%;

  button {
    width: 100%;
  }
`;
