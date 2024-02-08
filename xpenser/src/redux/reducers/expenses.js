/* This is simple Redux reducer */
/* In Redux, a reducer is a pure function that specifies how the application's state changes in response to actions sent to the store. */

import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses";

/* Here we can use our local storage of our browser to store the data entered. So that the data is not lost 
if the page is refreshed */

const initialList = () => {
    const list = localStorage.getItem("expense-list");   // getting this key-value from the local storage
    let expenses =  [];
    
    if( list ){         // if it is not null
        expenses = JSON.parse(list);    // then parse it and store into expenses. Parsing is neccessary since, data is initially in string format
    }

    return expenses;
}

const initialState =  {
    expenseList: initialList(),
    query:"",       // this query is used to filter our data based on our search
};

/* Here, a constant initialState is defined, which represents the initial state of the Redux store for 
the specific feature or part of the application related to expenses. 
It has a property expenseList initialized as an empty array. */



export const expenseReducer = (state=initialState , action) => {
    
    switch(action.type){

        case ADD_EXPENSE: {

            // storing data in the local storage(data must be stored in string format)
            localStorage.setItem("expense-list" , JSON.stringify([...state.expenseList , action.data]))

            return {
                ...state,           // using the spread operator(...) to get entire expense list
                expenseList: [...state.expenseList , action.data],
            };
        }

        case DELETE_EXPENSE: {
            const {data} = action;              // destructuring the action that needs to be deleted

            const updatedList = state.expenseList.filter( (item)=>
                item.createdAt !== data.createdAt   // now we need to search for the data the is needed to be deleted and we can use time as comparing parameter since time of any two different expense would always be unique
                // if this above condition satisfies then simply push element to list else dont push
            );

            // Filtering in React is pretty much what it says it is. It’s the process of looping through an array and including or excluding elements inside that array based on a condition that you provide.

            // storing updated data in the local storage(data must be stored in string format)
            localStorage.setItem("expense-list" , JSON.stringify(updatedList));


            return {
                ...state,
                expenseList: updatedList,
            }
        }

        case SEARCH_EXPENSE:{
            const {query} = action;
            return {
                ...state,
                query,
            }
        }

        default:
            return state;
    }
};

/* This code exports a function called expenseReducer. In Redux, a reducer is a pure function that takes 
the current state and an action as arguments and returns the new state. */


/* The action parameter represents the action that is dispatched to the store. This switch has few cases related to
corresponding actions, so now if, current action is ADD then return the current state and update expenselist, with
the added expenses data */