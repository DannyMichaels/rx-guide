import React, { useState, useEffect } from 'react';
import Med from './Med'
import CreateMed from './CreateMed'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom'

import './App.css';

function App() {
  const [meds, setMeds] = useState([])
  const [fetchMeds, setFetchMeds] = useState(false)
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
  }, [fetchMeds])
 
  return (
    <>
      <Router>
        <div className="App">
          <Header />

          
          {meds.map((med) => 
            
            <Med med={med} fetchMeds={fetchMeds} setFetchMeds={setFetchMeds}/>)}
            
          < CreateMed meds={meds} fetchMeds={fetchMeds} setFetchMeds={setFetchMeds}/>
          
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
