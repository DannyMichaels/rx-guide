import React, { useState, useEffect } from 'react';
import Med from './Med'
import CreateMed from './CreateMed'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [meds, setMeds] = useState([])

  useEffect(() => {
    const getApi = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions`
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      setMeds(response.data.records)
    }
  getApi()
  }, [])
 
  return (
    <>
      <Router>
        <div className="App">
          <Header />

          
          {meds.map((med) => <Med med={med} />)}
       <CreateMed />

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
