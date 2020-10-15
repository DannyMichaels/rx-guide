import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Med from './Med'

const About = () => {
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
      // console.log(response.data.records)
      const sortedMeds = response.data.records.sort((recordA, recordB) => {
        const date1 = new Date(recordA.createdTime).getTime();
        const date2 = new Date(recordB.createdTime).getTime();

        if (date1 < date2) {
          // console.log('less than');
          return -1;
        }
        else if (date1 > date2) {
          // console.log('greater than');

          return 1;
        }

        else {
          // console.log('equal to ');

          return 0;
        }
      })
      setMeds(sortedMeds)
    }
    getApi()
  }, [fetchMeds])

  return (
    <div>
      <div className="about-text">
        <h1>About RXGuide:</h1>
        <p>RXGuide, created by Daniel Michael, is an app made to help the user organize his medication. The user will be able to add, edit or remove medication.</p>
        <h2>List of Medications:</h2>
      </div>
      <div className="med-container">


        {meds.map((med) =>

          <Med med={med} fetchMeds={fetchMeds} setFetchMeds={setFetchMeds} editable={false} />)}
      </div>
    </div>

  );
};

export default About;