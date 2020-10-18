import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Custom from "./Custom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path="/">
              <Home />
            </Route>
          </main>
          <Footer />
          <Switch>
            <Route path="/About" exact component={About} />
            <Route path="/Custom" exact component={Custom} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
