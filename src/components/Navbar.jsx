import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo_1.png';
import Button from './Button';
import NavLink from './NavLink';

const Container = styled.div`
  z-index: 999;
  padding: 10px 72px;
  background: ${(bg) => (bg ? bg : 'rgba(255, 255, 255, 0.3)')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(1px);
  // box-shadow: 0px 5.20673px 72.8942px rgba(0, 0, 0, 0.12);
`;
const Div1 = styled.div``;
const LogoWrap = styled(Link)``;
const Log = styled.img`
  height: 39px;
`;
const Div2 = styled.div``;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all ease-in 1000ms;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

function Navbar({ bg }) {
  return (
    <Container bg={bg}>
      <Div1>
        <LogoWrap to="/">
          <Log src={Logo} />
        </LogoWrap>
      </Div1>
      <Div2>
        <NavMenu>
          <NavLink url="/" label="About Us" />
          <NavLink url="/" label="Features" />
          <NavLink url="/" label="White paper" />
          <Link to="/app">
            <Button
              label="Launch App"
              borderRadius="0px"
              color="#fff"
              bgColor="#000"
              margin="0px 10px"
            />
          </Link>
        </NavMenu>
      </Div2>
    </Container>
  );
}

export default Navbar;
