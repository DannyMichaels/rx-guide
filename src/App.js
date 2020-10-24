import React, { useState, useEffect } from "react";
import About from "./screens/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Custom from "./screens/Custom";
import "./App.css";
import MedDetail from "./Components/Medication/MedDetail";
import Layout from './Components/shared/Layout/Layout'
import { getMeds } from './services/axiosCalls'
// import { getSortedMeds } from './services/sortedMeds'

function App() {
  const [meds, setMeds] = useState([]);
  const [fetchMeds, setFetchMeds] = useState([]);

  useEffect(() => {
    const getApi = async () => {

        const response = await getMeds()

        const sortedMeds = response.sort((recordA, recordB) => {
        const date1 = new Date(recordA.createdTime).getTime();
        const date2 = new Date(recordB.createdTime).getTime();

        if (date1 < date2) {
          return -1;
        } else if (date1 > date2) {
          return 1;
        } else {
          return 0;
        }
      });
      setMeds(sortedMeds);
    };
    getApi();
  }, [fetchMeds]);

  return (
    <>
      <Router>
        <div className="App">
          <Layout>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
              <Route path="/about" exact component={About} meds={meds} fetchMeds={fetchMeds} setFetchMeds={setFetchMeds}/>
            <Route path="/custom-medication" exact component={Custom} />
            <Route exact path="/medication/:name">
              <MedDetail
                meds={meds}
                fetchMeds={fetchMeds}
                setFetchMeds={setFetchMeds}
              />
            </Route>
            </Switch>
            </Layout>
        </div>
      </Router>
    </>
  );
}

export default App;
