import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

export default store;

//DISPATCHERS FOR ACCOUNT:
/* 
store.dispatch(deposit(1000));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(2000, "Buy a bike"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

//DISPATCHERS FOR CUSTOMER:

store.dispatch(createCustomer("Muhammad Hamza Siddiqui", 123));
console.log(store.getState());
store.dispatch(updateName("Ali"));
console.log(store.getState());
 */
