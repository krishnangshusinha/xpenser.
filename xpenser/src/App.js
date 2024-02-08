import React from "react";
import Home from './pages/home';
import Header from "./components/header";
import { Route , BrowserRouter as Router , Routes } from "react-router-dom";
import Addexpense from "./pages/addexpense";
import Footer from "./components/footer";

const App = ()=>{
  return (
    <>
    {/*
      Wrapping everything within React Router DOM i.e <Router>.
      React Router is a standard library for routing in React. It enables the navigation among views of various 
      components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
    */}

      <Router>
          <Header/>
          <Routes>
            <Route path="/"  exact Component={Home}/>
            <Route path="/add-expense" Component={Addexpense}/>       {/* Here this Route allows you to navigate among various react components depending upon path name */}
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}


export default App;