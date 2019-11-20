import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Daily from "../../pages/Daily";
import Food from "../../pages/Food";
import Landing from "../../pages/Landing";
import PageNotFound from "../../components/PageNotFound";
import Preferences from "../../pages/Preferences";

/** Routes have been moved to the separate file
 *  for better testing.
 */
const Routes = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/food" exact component={Food} />
    <Route path="/daily" exact component={Daily} />
    <Route path="/preferences" component={Preferences} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
