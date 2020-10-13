import React, { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import About from './About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'

import './App.css';

function App() {

 
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <main>
          <Route exact path='/'>
        <Home />  
        </Route>
          </main>
          <Footer />
          <Switch>
            <Route path="/About" exact component={About} />
          </Switch>
        </div>
      </Router>
    </>
  );
}


export default App;
