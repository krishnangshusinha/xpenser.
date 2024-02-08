import React from "react";
import Topfold from "../../components/topfold";
import './home.css';
import ExpenseList from "../../components/expense-list";

const Home = () => {
    return (
        <>
            <div className="home">
                <Topfold/>
                <ExpenseList/>
            </div>
        </>
    );
}


export default Home;