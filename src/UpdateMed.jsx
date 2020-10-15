import React, { useState } from 'react';
import axios from 'axios'

const CreateMed = (props) => { 
  console.log(props)
  const [name, setName] = useState(props.med.fields.name)
  const [taken, setTaken] = useState(props.med.fields.taken)  


  const handleSubmit = async (e) => {
     e.preventDefault()

    const image = props.med.fields.image
    
    const fields = {
      name,
      taken,  
      image,
    }
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions/${props.med.id}`
    await axios.put(airtableURL, { fields }, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    })
    props.setFetchMeds(!props.fetchMeds)
  }


  return (
    <div>
      <form className="update-med" onSubmit={handleSubmit}>
     
      {/* <label htmlFor="name" type='text'>Edit Name:</label>
        <input name='name' type='text'
          value={name} onChange={(e) => setName(e.target.value)}
        />
         */}
        
          <label htmlFor="taken" type='text'>Edit Time:</label>
        <input name='taken' type='time'
          value={taken} onChange={(e) => setTaken(e.target.value)}
        />

        <button type='Submit'><img className="add" src="https://i.imgur.com/SnXF0hi.png" /></button>
      </form>
    </div>
  );
};

export default CreateMed;