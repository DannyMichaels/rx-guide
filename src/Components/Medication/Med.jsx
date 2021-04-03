import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import UpdateMed from './UpdateMed';
import { CircularProgress } from '@material-ui/core';
import { deleteMed } from '../../services/userMeds';

const Med = (props) => {
  const [isRefreshed, setIsRefreshed] = useState(false);

  const handleDelete = async () => {
    setIsRefreshed(true);
    setTimeout(async () => {
      await deleteMed(props.med.id);
      props.setFetchMeds(!props.fetchMeds);
      setIsRefreshed(false);
    }, 150);
  };

  return (
    <div className="med">
      <h3>{props.med.fields.name}</h3>
      <img
        src={props.med.fields.image}
        width="100"
        height="50"
        alt={props.med.fields.name}
      />

      {props.editable && (
        <div>
          <h4>Taken At: </h4>

          <h5>{props.med.fields.taken}</h5>
          <UpdateMed
            med={props.med}
            fetchMeds={props.fetchMeds}
            setFetchMeds={props.setFetchMeds}
          />
          <button onClick={handleDelete} className="edit-button">
            {isRefreshed ? (
              <CircularProgress />
            ) : (
              <img
                src="https://i.imgur.com/NhIlDPF.png"
                alt="delete"
                width="20px"
              />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default withRouter(Med);
