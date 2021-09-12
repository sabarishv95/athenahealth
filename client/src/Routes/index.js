import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppHeader from "../commons/components/AppHeader";
import PaymentBillingDetailsContainer from "../modules/PatientBillingDetails/containers/";
import PatientBillingTransactionsContainer from "../modules/PatientBillingTransactions/containers";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppHeader />
        <div>
          <Switch>
            <Route exact path="/" component={PaymentBillingDetailsContainer} />
            <Route path="/patientTransactions" component={PatientBillingTransactionsContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
