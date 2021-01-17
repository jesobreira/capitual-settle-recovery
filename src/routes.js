import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Bounce from "~/pages/Bounces";
import Confirm from "~/pages/Confirm";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:partner/bounce_ok" exact component={Confirm} />
        <Route path="/:partner/bounce/:order/:token" exact component={Bounce} />
      </Switch>
    </BrowserRouter>
  );
}
