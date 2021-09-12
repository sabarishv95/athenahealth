import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { createHashHistory as createHistory } from "history";
import { createLogger } from "redux-logger";
import { apiMiddleware } from "redux-api-middleware";
import paymentBillingDetails from "../modules/PatientBillingDetails/store/reducers";
import paymentTransactions from "../modules/PatientBillingTransactions/store/reducers";

function createReducer() {
  return combineReducers({
    paymentBillingDetails,
    paymentTransactions,
  });
}

export const history = createHistory();

export default function configureStore(initialState = {}) {
  const middlewares = [thunk, apiMiddleware, routerMiddleware(history)];

  const logger = createLogger({
    collapsed: () => true,
  });
  if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false,
        })
      : compose;

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));

  return store;
}
