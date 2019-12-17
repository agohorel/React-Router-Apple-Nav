import React from "react";
import styled from "styled-components";

export const Layout = props => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-color: #3c3c3c;
`;
