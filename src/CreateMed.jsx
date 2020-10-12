import React, { useState } from 'react';
import axios from 'axios'

const CreateMed = (props) => {
  const [name, setName] = useState('Prozac')
  const [taken, setTaken] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const fields = {
      name,
      taken,
    }
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions`
    await axios.post(airtableURL, { fields }, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
       })
    setName('')
    setTaken('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" type='text'>Name:</label>
        <input name="name" type='text'
          value={name} onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="taken" type='text'>Taken At:</label>
        <input name='taken' type='time'
          value={taken} onChange={(e) => setTaken(e.target.value)}
        />

        <button type='Submit'><img className="add" src="https://i.imgur.com/BZOV6FC.png" /></button>
      </form>
    </div>
  );
};

export default CreateMed;