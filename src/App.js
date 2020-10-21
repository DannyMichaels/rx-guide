import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Custom from "./Custom.jsx";
import "./App.css";
import MedDetail from "./MedDetail";
import axios from "axios";

function App() {
  const [meds, setMeds] = useState([]);
  const [fetchMeds, setFetchMeds] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });

      const sortedMeds = response.data.records.sort((recordA, recordB) => {
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
            <Route exact path="/medication/:name">
              <MedDetail
                meds={meds}
                fetchMeds={fetchMeds}
                setFetchMeds={setFetchMeds}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
