import React from "react";
import About from "./screens/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Custom from "./screens/Custom";
import "./App.css";
import MedDetail from "./Components/Medication/MedDetail";
import Layout from './Components/shared/Layout/Layout'
// import { getMeds } from './services/axiosCalls'
// import { getSortedMeds } from './services/sortedMeds'
import Error from './screens/Error'
// import { getSortedMeds } from './services/sortedMeds'

function App() {
 

  return (
    <>
      <Router>
        <div className="App">
          <Layout>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
              <Route path="/about" exact component={About} />
            <Route path="/custom-medication" exact component={Custom} />
            <Route exact path="/medication/:name">
              <MedDetail />
              </Route>
              <Route component={Error} />
              <Route path="*" >
                
            </Route>
            </Switch>
            </Layout>
        </div>
      </Router>
    </>
  );
}

export default App;
