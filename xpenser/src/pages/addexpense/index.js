import React from "react";
import Topfold from "../../components/topfold";
import './addexpense.css';
import Addform from "../../components/add-form";

// This component Addexpense only gets rendered when, pathname becomes "/add-expense" and this is only possible
// when we click on Add button since when it is clicked it changes path name to "/addexpense" since it is wrapped
// within, <Link> tag. 
// So this, <Addform/> component is also only seen when "/add-expense" is the path name

const Addexpense = () => {
    return(
        <>
            <div className="add-expense">
                <Topfold/>
                <Addform/>
            </div>
        </>
    );
}
export default Addexpense;