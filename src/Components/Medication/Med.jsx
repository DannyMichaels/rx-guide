import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import UpdateMed from './UpdateMed'
import axios from 'axios'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'
import { getDeleteMeds } from '../../services/axiosCalls'

const Button = styled.button`
  background: none;
  border: none;

&:focus {
  outline: none;
}

img {
  width: 30%;
  height: 30%;
}
`

const Med = (props) => {
  const [deleted, setDeleted] = useState(false)

  const handleDelete = async () => {
    setDeleted(true)
    setTimeout(async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions/${props.med.id}`
      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      props.setFetchMeds(!props.fetchMeds)
      setDeleted(false)
    }, 150)
  }


  return (
    <div className='med'>
    
      <h3>{props.med.fields.name}</h3>
      <img src={props.med.fields.image}
        width='100'
        height='50'
        alt="Medication"
      />

      <p>{props.med.fields.description}</p> 
      {props.editable && (<div>
        <h4>Taken At: </h4> <h5>{props.med.fields.taken}</h5>

        <UpdateMed med={props.med}
          fetchMeds={props.fetchMeds}
          setFetchMeds={props.setFetchMeds}
        />
        <button onClick={handleDelete} className='edit-button'>{deleted ? <CircularProgress/> : <img src="https://i.imgur.com/NhIlDPF.png" alt="delete"
          width='20px'
        />
        }
        </button>
      </div>)}
    </div>
  );
};

export default withRouter(Med);