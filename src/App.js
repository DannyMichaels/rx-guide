import React from 'react';
import Header from './Header'
import Footer from './Footer'
import About from './About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'

import './App.css';

function App() {

 
  return (
    <>
       <Header />
      <Router>
        <div className="App">
         
          <main>
          <Route exact path='/'>
        <Home />  
        </Route>
          </main>
          
          <Switch>
            <Route path="/About" exact component={About} />
          </Switch>
          
        </div>
      </Router>
      <Footer />
    </>
  );
}


export default App;
