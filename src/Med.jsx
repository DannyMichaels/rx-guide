import React from 'react';

const Med = (props) => {
  return (
    <div>
      <div className='med'>
      <h3>{props.med.fields.name}</h3>
        <p>{props.med.fields.description}</p>
        <p>{props.med.fields.taken}</p>
       

    </div>
      </div>
  );
};

export default Med;