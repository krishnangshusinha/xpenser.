import React, { useState } from "react";
import './add-form.css';
import { categories } from "../../constants/add-expense";
import { useDispatch } from "react-redux";
import {addExpense} from '../../redux/actions/expenses';

// for the toastify effect 1st line is the component, and function and the 2nd line is the CSS of the toastify
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from "./success-modal";


const Addform = () => {

    const cat = categories;

    const [categoryOpen , setcategoryOpen] = useState(false);

    const [title , settitle] = useState();
    const [amount, setamount] = useState();
    const [category , setcategory] = useState();
    const [isModalOpen , setModal] = useState(false);

    const dispatch = useDispatch();    // useDispatch() is a hook in React Redux. It allows you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable.

    const updatetitle = (event) => {
        settitle(event.target.value);
    }

    // we are basically taking input of numbers only in amount feild and preventing any entry other than number 
    const updateamount = (event) => {
        const val = parseFloat(event.target.value);    // this type casts the enetered value into decimal point number

        if(isNaN(val)){     // this function isNaN() checks whether passed parameter is a number of not return true if it is not a number and return false if it is number NaN --> Not a Number
            setamount("");
            return;
        }
        setamount(val);
    }

    const updatecategory = (category) =>{
        setcategory(category);
        setcategoryOpen(false);
    }

    const handleSubmit = () => {
        if( title==='' || amount === "" || !category){          // if entry is not valid then simply display the toaster saying invalid entry
            const notify = () => toast("Please Enter valid data !!");           // function for the toaster
            notify();               // invoking the above function
            return;
        }
        
        const data = {
            title,              // if key-vlaue pairs are same then they can be written like this so title:title can be written as title,
            amount,
            category,
            createdAt : new Date()
        }

        dispatch(addExpense(data));    // dispatching the addExpense function to the Redux store with "data" as its parameter

        // This addExpense() is the function from redux/action/expenses.js.
        // This data as entered by the user is being stored and then passes as parameter to that function which is dispatched to the redux store
        
        // since data entry is done successfully till now hence we can set our success-modal page open
        setModal(true);

    }

    return (
        <>
           <div className="add-form">

                {/* This toast container is part of a npm package called react-toastify that is already made we just used it in our project by installing it in this way --> npm i react-toastify  This gives us the toastify at bottom left when ever an form is submitted, or invalid data is entered etc */}
                <ToastContainer position="bottom-left" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick />

                {/* This is the success-modal that displays when successfully form is being submitted. The state of modalOpen is being sent to the success-modal component via props, true->modal displayed  ,  false->modal not displayed */}
                <SuccessModal isModalOpen={isModalOpen} setModal = {setModal} />


                <div className="form-item">
                    <label>Title</label>
                    <input type="text" placeholder="Give a name to your expenditure" value={title} onChange={updatetitle} />
                </div>
                <div className="form-item">
                    <label>Amount ₹</label>
                    <input type="text" className="amount-input" placeholder="Give amount of expenditure" value={amount} onChange={updateamount} />
                </div>
                <div className="category-container-parent">
                    <div className="category">
                        <div className="category-dropdown" onClick={()=>setcategoryOpen(!categoryOpen)}>    {/* On clicking over the dropdown each time the value of categoryOpen changes true->false or false->true */}
                            <label>{category ? category.title : "Category"}</label>     {/* If category is non null then display ist title i.e which is selected */}
                            <i class="fi fi-rr-angle-small-down"></i>
                        </div>
                        { categoryOpen ? 
                            (
                                <div className="category-container">
                                    {cat.map(category=>(    // mapping with each item in drop down list(present in "constants" folder)
                                        
                                        <div className="category-item" style={{ borderRight:`5px solid ${category.color}` }} key = {category.id} onClick={()=>updatecategory(category)} >     {/* Key attribute is used for better performance */}
                                            
                                            <label> {category.title} </label>
                                            <img src={category.icon} alt={category.title}/>

                                        </div>
                                    ))}
                                </div>
                            ): null
                         }
                    </div>
                </div>

                <div className="form-add-button">
                    <div onClick={handleSubmit}>
                        <label>Add</label>
                        <i class="fi fi-rr-paper-plane"></i>
                    </div>
                </div>
           </div>
        </>
    );
}

export default Addform;