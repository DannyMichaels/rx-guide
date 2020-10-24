import React, { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import CreateMedForm from '../Forms/CreateMedForm'

const Form = styled.form`

  display: flex;
  text-align: center;
  flex-direction: column;
  width: 200px;
  max-width: 200px;
  margin: 0 auto;
  border: 1px solid pink;
  padding: 10px;
  background-color: #ffccff;
  box-shadow: 5px 5px peachpuff;
  align-items: center;
  margin-top: 20px;

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

select {
  border: peachpuff;
  cursor: pointer;
  text-align-last: center;
  margin: 10px;
}

 .select-css{
  width: 100%;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
  font-size: 18px;
  color: #60666d;
  width: 180px;   
 }

select:focus {
  outline: none;
}

input {
  border: peachpuff;
  cursor: pointer;
  display: block;
  width: 100%;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
  font-size: 18px;
  color: #60666d;
  text-align-last: center;
  margin: 5px;
  width: 140px;   

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

    <CreateMedForm med={props.med}
     meds={props.meds}
      taken={taken} setTaken={setTaken} name={name}
      setName={setName} handleSubmit={handleSubmit} />
  );
};

export default CreateMed;