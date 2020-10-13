import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom'
import UpdateMed from './UpdateMed'

const Med = (props) => {
  const [checkbox, setCheckbox] = useState('')
  return (
    <div>
      <div className='med'>
        {/* <img src="https://i.imgur.com/1qUV2SU.png"
           width='50'
          height='50'
         className ='med-pic'
        /> */}

     
        <h3>{props.med.fields.name}</h3>
        <img src={props.med.fields.image}
          width='100'
          height='50'
        />

        <p>{props.med.fields.description}</p>
       <h4>Taken At: </h4> <h5>{props.med.fields.taken}</h5>
        {/* <input type="checkbox" value={checkbox}
          onChange={(e) => setCheckbox(e.target.value)} /> */}

        <UpdateMed med={props.med}
          fetchMeds={props.fetchMeds}
          setFetchMeds={props.setFetchMeds}
        />
      </div>
      </div>
  );
};

export default withRouter(Med);