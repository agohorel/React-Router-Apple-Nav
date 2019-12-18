import React from "react";
import { useParams, useRouteMatch, Route, Switch } from "react-router-dom";

import { Layout } from "./Layout";
import { SubNav } from "./SubNav";
import { Card } from "./Card";

export const Product = ({ data }) => {
  const { id } = useParams();
  const { path, url } = useRouteMatch();
  const instrument = data[id];

  return (
    <Layout>
      <SubNav url={url}></SubNav>
      <h1>{instrument.name}</h1>
      <h3>{instrument.type}</h3>
      <p>${instrument.price}</p>

      <Switch>
        <Route path={`${path}/demo`}>
          <Card data={instrument} demo></Card>
        </Route>
      </Switch>
      <Switch>
        <Route path={`${path}/purchase`}>
          <Card data={instrument} purchase></Card>
        </Route>
      </Switch>
    </Layout>
  );
};
