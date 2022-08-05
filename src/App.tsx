import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/Header/NavBar";
import { HomePage } from "./components/Home/HomePage";
import { AboutPage } from "./components/About/AboutPage";
import { ContactPage } from "./components/Contact/ContactPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
    // <div className="App">
    //   <NavBar />
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
      
    // </div>
  );
}

export default App;
