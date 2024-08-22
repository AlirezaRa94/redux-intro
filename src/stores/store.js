import { createStore, combineReducers } from "redux";

import {
  accountReducer,
  deposit,
  withdraw,
  requestLoan,
  payLoan,
} from "./accountStore";
import { customerReducer, updateName, createCustomer } from "./customerStore";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(1000, "paying off debt"));
store.dispatch(payLoan());

store.dispatch(createCustomer("Alireza Raei", "1234567890"));

console.log(store.getState());
