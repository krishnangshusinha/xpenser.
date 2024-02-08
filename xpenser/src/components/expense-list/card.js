import React from "react";
import './card.css';
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions/expenses";

/* This component specifies the style for each card(of expense). */


const Card = ( {item , notifySuccess } ) => {     // de-structuring the "item"  item is basically the data fetched from Redux store by using useSelector() hook, which was stored in Redux store using useDispatch() hook. And the notifySuccess is for the toastify

    const time = moment(item.createdAt).fromNow();   // this "moment" is a very famous npm package, that is used here for the feature "an hour ago" within the card. It takes the time when the card is created and compares it with current time by using the fromNow() and then return the statement accordingly "an hour/two hour ago" etc 

    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch( deleteExpense(item) );
        // this triggers the function deleteExpense() written in redux/action/expenses.js
        notifySuccess();
    }

    return (
        <>
            <div className="card" style={{borderRight: `6px solid ${item.category.color}`}}> 
                <div className="card-image-container">
                    <img src={item.category.icon} alt={item.category.title} className="card-image" />
                </div>
                <div className="card-info">
                    <label className="card-title" >{item.title}</label>
                    <label className="card-time" > {time} </label>
                </div>
                <div className="card-right">
                    <div>
                        <label className="card-amount">₹ {item.amount} </label>
                    </div>
                    <div className="delete-icon" onClick={handleDelete} >
                        <i class="fi fi-rr-trash"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;