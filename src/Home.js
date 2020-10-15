import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Med from './Med'
import CreateMed from './CreateMed'

export default function Home() {
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
      console.log(response.data.records)
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
    <>
      <div>

        {meds.map((med) =>

          <Med med={med} fetchMeds={fetchMeds} setFetchMeds={setFetchMeds} />)}

        < CreateMed meds={meds} fetchMeds={fetchMeds} setFetchMeds={setFetchMeds} />
      </div>
    </>
  )
}
