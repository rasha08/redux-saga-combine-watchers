import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import { Container } from "react-bootstrap";

import Users from "./views/users/Users";
import ImagesCarousel from "./views/carousel/ImagesCarousel";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route component={Users} path={"/users"} exact={true} />
          <Route component={ImagesCarousel} path={"/photos"} exact={true} />
            <Redirect exact from="/" to="users" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
