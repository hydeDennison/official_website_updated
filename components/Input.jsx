import styled from 'styled-components';

const StyledInput = styled.input`
  outline: none;
  padding: 13px;
  width: 100%;
  border: none;
  color: var(--primary-bg);
  border-radius: 5px;
  letter-spacing: 1px;
  font-size: 14px;
  background: #ddd;
`;

const Input = ({ ...children }) => {
  return (
    <>
      <StyledInput {...children} />
    </>
  );
};

export default Input;
