import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppHeader from "../commons/components/AppHeader";
import PatientBillingDetails from "../modules/PatientBillingDetails/PatientBillingDetails";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppHeader />
        <div>
          <Switch>
            <Route exact path="/" component={PatientBillingDetails} />
            <Route path="/patientTransactions" component={PatientBillingDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
