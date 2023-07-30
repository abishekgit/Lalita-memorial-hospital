import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background-color: #336699;
  padding: 16px;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>Lalita Memorial Hospital</Logo>
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/ivf">IVF</NavLink>
                <NavLink to="/gynecology">Gynecology</NavLink>
                <NavLink to="/maternity">Maternity</NavLink>
                <NavLink to="/fertility">Fertility</NavLink>
                <NavLink to="/doctors">Doctors</NavLink>
                <NavLink to="/book-appointment">Book Appointment</NavLink>
            </NavLinks>
        </HeaderContainer>
    );
};

export default Header;
