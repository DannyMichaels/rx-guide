import React, { useState, useEffect } from "react";
import Med from "../Components/Medication/Med";
import { Link } from 'react-router-dom'
import { getMeds } from '../services/axiosCalls'
// import { getSortedMeds } from './services/sortedMeds'
import Search from '../Components/Forms/Search'


const About = () => {
  const [meds, setMeds] = useState([]);
  const [fetchMeds, setFetchMeds] = useState(false);
  const [search, setSearch] = useState(false)
  // const [filteredMeds, setFilteredMeds] = useState([])
  
  useEffect(() => {
    const getApi = async () => {
      const medications = await getMeds() // importing axios call from a js file.
        const sortedMeds = medications.sort((recordA, recordB) => {
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

  
  const filteredMeds = meds.filter((med) =>
    med.fields.name.toLowerCase().includes(`${search}`.toLowerCase())
  );

  return (
    <div>
      <div className="about-text">
      <h1 style={{ textShadow: '2px 2px peachpuff', color: 'black'}}>About RXGuide:</h1>
        <p style={{ textShadow: '2px 2px peachpuff', color: 'black'}}>
          RXGuide, created by Daniel Michael, is an app made to help the user
          organize his medication. The user will be able to add, edit or remove
          medication.
        </p>
      </div>

      {/* when someone starts searching something, I am going to set search to true */}
      {/* and then I am going to render the filteredMeds */}
      {/* if it's false render list of regular meds without any filter */}

      <Search setSearch={setSearch} />

      
      {!search ? (
        <div>
        <h2 style={{ textAlign: "center", textShadow: '2px 2px peachpuff', color: 'black' }}>List of Medications:</h2>
        <div className="med-container">
          {meds.map((med) => (
            <Link style={{color: 'black', textDecoration: 'none'}} to={`/medication/${med.fields.name}`}>
            <Med
              style={{ textAlign: "center" }}
              med={med}
              fetchMeds={fetchMeds}
              setFetchMeds={setFetchMeds}
              editable={false}
              />
            </Link>
          ))}
        </div>
        </div>
      ) : (
        <div className="med-container">
          {filteredMeds.map((med) => (
           <Link style={{color: 'black', textDecoration: 'none'}} to={`/medication/${med.fields.name}`}>
            <Med
              med={med}
              fetchMeds={fetchMeds}
              setFetchMeds={setFetchMeds}
              editable={false}
            /></Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
