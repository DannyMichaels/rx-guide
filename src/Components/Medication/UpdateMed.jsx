import React, { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Form = styled.form`

select {
  border: peachpuff;
  cursor: pointer;
}

 

select:focus {
  outline: none;
}

input {
  border: peachpuff;
  cursor: pointer;
}
input:focus {
  outline: none;
}

button {
  background: none;
  border: none;
}
button:focus {
  outline: none;
}
img{
  width: 40%;
  height: 40%; 
}
`

const UpdateMed = (props) => { 
  const [name] = useState(props.med.fields.name)

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
      <Form className="update-med" onSubmit={handleSubmit}>
     
        
          <label htmlFor="taken" type='text'>Edit Time:</label>
        <input name='taken' type='time'
          value={taken} onChange={(e) => setTaken(e.target.value)}
        />

        <button className='edit-button' type='submit'><img className="add" src="https://i.imgur.com/SnXF0hi.png" alt="Add"/></button>
      </Form>
    </div>
  );
};

export default UpdateMed;
