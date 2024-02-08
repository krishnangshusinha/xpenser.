import React, { useState } from "react";
import './topfold.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";

const Topfold = () => {

    // using react hook to get the query searched in the search bar
    const [query , setquery] = useState("");
    const dispatch = useDispatch();

    const handlequery = (event) => {
        setquery(event.target.value);   // accesses the value entered in the search bar
        dispatch(searchExpense(event.target.value));   // sending the query to redux store to necessary action         
    }

    return (
        <>
            <div className="topfold">
            {/* 
                So the code below refers to, if we click on the Add button then it would open up the other page,
                where we could add other expenses. Here a ternary operator is being used where if pathname is "/"
                then expense list is being rendered else , the other adding field is being rendered.
            */}
                {
                    window.location.pathname ==="/" ? 
                    (
                        <div className="home-topfold">
                            <div className="search-bar">
                                <i class="fi fi-rr-search"></i>
                                <input type="text" placeholder="Search for expenses" onChange={handlequery} value={query} />
                            </div>
                            <Link to="/add-expense">                {/* This <Link> Tag is used to redirect to other path name on clicking the content wrapped within the <Link> tag */}
                                <div className="add-button">        {/* So as soon as the add button is clicked which is within the <Link> tag the path name changes to /add-expense and immediately the react router renders Addexpense component */}
                                    <i class="fi fi-rr-add"></i>
                                    <label> Add </label>
                                </div>
                            </Link>
                        </div>
                    ):
                    (
                        <div className="add-topfold">
                            <Link to="/">                                      {/* Similary if we click on Back or Cancel then the path name changes to "/" as immediately the react Router renders Home component */}
                                <div className="add-topfold-button">
                                    <i class="fi fi-rr-angle-left"></i>
                                    <label>Back</label>
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="add-topfold-button">
                                    <i class="fi fi-rr-cross-circle"></i>
                                    <label>Cancel</label>
                                </div>
                            </Link>
                        </div>
                    )
                }
                
            </div>
        </>
    );
}
export default Topfold;