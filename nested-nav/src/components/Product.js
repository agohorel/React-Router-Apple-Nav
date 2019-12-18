import React from "react";
import { useParams } from "react-router-dom";

import { Layout } from "./Layout";

export const Product = ({ data }) => {
  const { id } = useParams();
  const instrument = data[id];

  return (
    <Layout>
      <h1>{instrument.name}</h1>
      <h3>{instrument.type}</h3>
      <p>${instrument.price}</p>
    </Layout>
  );
};
