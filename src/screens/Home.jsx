import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Med from '../Med'
import CreateMed from '../CreateMed'

export default function Home() {
  const [addedMeds, setAddedMeds] = useState([]);
  const [prescribedMeds, setPrescribedMeds] = useState([]);
  const [fetchMeds, setFetchMeds] = useState(false)
  
  useEffect(() => {
    const getApi = async () => {
    const prescriptionsUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions`
      const prescriptionResponse = await axios.get(prescriptionsUrl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      setPrescribedMeds(prescriptionResponse.data.records);
    }
    getApi();
  },[])
  useEffect(() => {
    const getApi = async () => {
      const addedMedsUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/addedMeds`
      const response = await axios.get(addedMedsUrl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      })
      
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
      setAddedMeds(sortedMeds)
    }
    getApi()
  }, [fetchMeds])

  return (
    <>
      <div>

        {addedMeds.map((med) =>

          <Med editable={true} med={med} fetchMeds={fetchMeds} setFetchMeds={setFetchMeds} />)}

        < CreateMed meds={prescribedMeds} fetchMeds={fetchMeds} setFetchMeds={setFetchMeds} />

      </div>
    </>
  )
}
