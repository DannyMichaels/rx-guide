import React, { useState, useEffect } from 'react'
import Med from '../Components/Medication/Med'
import CreateMed from '../Components/Medication/CreateMed'
import { getMeds } from '../services/meds'
import { getAddedMeds } from '../services/getAddedMeds'

export default function Home() {
  const [addedMeds, setAddedMeds] = useState([]);
  const [prescribedMeds, setPrescribedMeds] = useState([]);
  const [fetchMeds, setFetchMeds] = useState(false)
  
  useEffect(() => {
    const getApi = async () => {
    const prescriptionResponse = await getMeds()
      setPrescribedMeds(prescriptionResponse);
    }
    getApi();
  }, [])
  
  useEffect(() => {
    const getApi = async () => {
      
        const addedMedsResponse = await getAddedMeds()
        const sortedMeds = addedMedsResponse.sort((recordA, recordB) => {
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
