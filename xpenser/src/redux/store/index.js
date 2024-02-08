import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";


// This function is used to combine multiple Reducers
const reducer = combineReducers({
    expenses: expenseReducer,
});

/* An empty object is being created*/
const intitialState = {};

const store = createStore(reducer , intitialState);
/* This is used to create Redux Store */


export default store;