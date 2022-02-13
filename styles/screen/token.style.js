import styled from 'styled-components';

export const Token__select__wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Token__select__header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  .closeBtn {
    cursor: pointer;
  }
`;
export const Token__Search = styled.div`
  margin: 10px 0;
`;
export const Token__container = styled.div`
  background: #ddd;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  margin-top: 10px;
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
export const Token__sidebar__select = styled.div`
  width: 50px;
  background: #fff;
  height: 100vh;
  position: absolute;
  left: 0;
  border-top-right-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
  }
  ul li {
    cursor: pointer;
    background: #121212;
    margin-bottom: 3px;
    border-radius: 5px;
    transition: all 300ms ease-in-out;
    &:hover {
      transition: all 300ms ease-in-out;
      background: #212121;
    }
  }
`;
export const Token__list__option = styled.div`
  display: flex;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
  }
  li {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background: #eee;
    padding: 8px;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    .Token__balance {
      padding-right: 10px;
      font-weight: 600;
      color: var(--primary-bg);
    }

    &:hover {
      transition: all 100ms ease-in-out;
      background: rgba(255, 255, 255, 0.1);
      color: #ccc;
    }
  }
`;

export const Token__info = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;

  .name {
    font-weight: 600;
    color: var(--primary-bg);
    font-size: 14px;
  }
`;
