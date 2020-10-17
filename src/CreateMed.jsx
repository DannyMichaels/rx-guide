import React, { useState } from 'react';
import axios from 'axios'

const CreateMed = (props) => { 
  const [name, setName] = useState('Prozac')
  const [taken, setTaken] = useState('')
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const selectedMed = props.meds.find(m => m.fields.name.trim() === name.trim()); 
    // if (selectedMed) {
    //   image = selectedMed.image
    // }
    // console.log('HELLO!!', selectedMed)
    if (!taken) {
      alert('You have to choose the time!')
      return 
    }
    const image = selectedMed?.fields?.image;

    const fields = {
      name,
      image,
      taken,
    }

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/addedMeds`
    await axios.post(airtableURL, { fields }, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    })

    props.setFetchMeds(!props.fetchMeds)
    setName('');
    setTaken('');
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" type='text'>Name:</label>
        <select name='name' type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}>
          {props.meds.map((med) => (
            <option>{med.fields.name}</option>
          ))}
         </select>
        
          <label htmlFor="taken" type='text'>Taken At:</label>
        <input name='taken' type='time'
          value={taken} onChange={(e) => setTaken(e.target.value)}
        />
        <button type='Submit'><img className="add" src="https://i.imgur.com/BZOV6FC.png" alt="Submit"/></button>
      </form>
    </div>
  );
};

export default CreateMed;