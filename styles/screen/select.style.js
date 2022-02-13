import styled from 'styled-components';

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
