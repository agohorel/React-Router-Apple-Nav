import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SubNav } from "./SubNav";

import measurements from "../measurements";

export const Nav = ({ setCurrentInstrument, instruments }) => {
  const handleProductLink = id => {
    setCurrentInstrument(id);
  };

  return (
    <header>
      <Navbar>
        {instruments.map(inst => {
          return (
            <NavLink
              key={inst.id}
              to={`/product/${inst.id}`}
              onClick={() => handleProductLink(inst.id)}
            >
              {inst.name}
            </NavLink>
          );
        })}
      </Navbar>
      <SubNav></SubNav>
    </header>
  );
};

const Navbar = styled.nav`
  max-width: 100%;
  height: ${measurements.navHeight};
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
