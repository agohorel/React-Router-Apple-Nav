import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SubNav = ({ url }) => {
  return (
    <SubNavigation>
      <NavLink to={`${url}/demo`}>Audio Demo</NavLink>
      <NavLink to={`${url}/purchase`}>Buy Now</NavLink>
    </SubNavigation>
  );
};

const SubNavigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #6c6c6c;
  padding: 1rem 10rem;
`;
