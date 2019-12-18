import React from "react";
import styled from "styled-components";

export const Card = ({ data, ...props }) => {
  return (
    <>
      {props.demo ? (
        <Frame src={data.demo}></Frame>
      ) : (
        <Button>Purchase {data.name}</Button>
      )}
    </>
  );
};

const Button = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #1c1c1c;
  color: #aaa;
  padding: 1rem 1.5rem;
  margin-top: 1rem;

  &:hover {
    background-color: #6c6c6c;
    color: #fff;
  }
`;

const Frame = styled.iframe`
  width: 50%;
  height: 300px;
  border: none;
  margin-top: 1rem;
`;
