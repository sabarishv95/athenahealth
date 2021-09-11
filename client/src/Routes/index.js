import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppHeader from "../commons/components/AppHeader";
import PaymentBillingDetailsContainer from "../modules/PatientBillingDetails/containers/";
import PatientBillingTransactions from "../modules/PatientBillingTransactions/";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppHeader />
        <div>
          <Switch>
            <Route exact path="/" component={PaymentBillingDetailsContainer} />
            <Route path="/patientTransactions" component={PatientBillingTransactions} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
