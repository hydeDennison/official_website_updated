import styled from 'styled-components';
const StyledLink = styled.a`
  color: #eee;
  display: flex;

  span {
    margin: 0 8px;
    display: flex;
    align-items: center;
  }

  &.active {
    color: red;
    border-left: 1px solid yellow;
  }
`;
const NavLink = ({ url, label, icon, ...children }) => {
  return (
    <>
      <StyledLink href={url} {...children}>
        {label && <span>{label}</span>}
        {icon && <span>{icon}</span>}
      </StyledLink>
    </>
  );
};

export default NavLink;
