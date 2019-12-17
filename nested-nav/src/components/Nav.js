import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  return (
    <header>
      <Navbar>
        <NavLink>FunkoTron</NavLink>
        <NavLink>JazzoMatic</NavLink>
        <NavLink>BluesoTonic</NavLink>
      </Navbar>
    </header>
  );
};

const Navbar = styled.nav`
  max-width: 100%;
  height: 75px;
  display: flex;
  padding: 0 10rem;
  justify-content: space-between;
  align-items: center;
  background-color: #9c9c9c;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 32px;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;
