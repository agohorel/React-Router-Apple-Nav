import React from "react";
import styled from "styled-components";

import measurements from "../measurements";

export const Layout = props => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  min-width: 100%;
  min-height: calc(100vh - ${measurements.navHeight});
  background-color: #3c3c3c;
`;
