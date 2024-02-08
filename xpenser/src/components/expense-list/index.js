import React from "react";
import './expense-list.css';
import Card from "./card";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const ExpenseList = () => {

    const {expenseList: list , query} = useSelector(state => state.expenses)

    /* The "expenseList: list" means expenseList as list and also getting the query  */
    /* The useSelector hook is a feature provided by the React-Redux library that allows React components to access the state stored in a Redux store */

    /* Now our target is instead of taking the entire list we can take a filteredList which is filtered in the basis
    of query searched in the search bar */
    const filteredList = list.filter((item)=>
        item.title.includes(query)    // so if the item's title includes query then return push it
    );


    const notifySuccess = () => toast.success("Expense deleted");   // function which when called invokes the toastify effect (it is being invoked when expense if deleted)

    return (
        <>
            <div className="expense-list">

                {/* This adds the success toastify when a expense is successfully deleted */}
                <ToastContainer position="bottom-left" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick />


                {filteredList.length ?                  // so here if list.length>0 then 1st part executes else null exectes
                    (
                        filteredList.map(item => (      // map travels key-by-key(here the key is "item") through the given array and 
                            <Card item = {item} notifySuccess= {notifySuccess} /> 
                        ))
                    ):
                    (
                    <div className="empty-state">
                        <img src={require("../../assets/empty-folder.png")} alt="Empty List" className="empty-image" />   {/* This image is shown if our expense list is empty */}
                        <label>Uh oh! Your Expense List is Empty!</label>
                    </div>
                    )
                }
                
            </div>
        </>
    );
}

export default ExpenseList;