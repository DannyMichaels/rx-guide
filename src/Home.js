import React, {useState, useEffect} from 'react'
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
      setMeds(response.data.records)
    }
  getApi()
  }, [fetchMeds])

  return (
    <>
      <div>
        
      {meds.map((med) => 
            
            <Med med={med} fetchMeds={fetchMeds} setFetchMeds={setFetchMeds}/>)}
            
          < CreateMed meds={meds} fetchMeds={fetchMeds} setFetchMeds={setFetchMeds}/>
</div>
    </>
 )
}
