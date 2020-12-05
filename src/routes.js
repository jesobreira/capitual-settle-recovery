import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import WithdrawalConfirm from "~/pages";
import Confirm from "~/pages/Confirm";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WithdrawalConfirm} />
        <Route path="/confirm-withdrawal" component={Confirm} />
      </Switch>
    </BrowserRouter>
  );
}
