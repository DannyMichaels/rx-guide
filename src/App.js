import React from 'react';
import Header from './Header'
import Footer from './Footer'
import About from './About'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />

          <Footer />
          <Switch>
            <Route path="/About" component={About} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
