import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import UpdateMed from './UpdateMed';
import { CircularProgress } from '@material-ui/core';
import { deleteMed } from '../../services/userMeds';
import Moment from 'react-moment';
import 'moment-timezone';

const Med = (props) => {
  const [isRefreshed, setIsRefreshed] = useState(false);

  const handleDelete = async () => {
    setIsRefreshed(true);
    setTimeout(async () => {
      await deleteMed(props.med.id);
      props.onDeleteMed(props.med.id);
      setIsRefreshed(false);
    }, 150);
  };

  function tConvert(time) {
    // Check correct time format and split into components
    // convert to am or pm
    // https://stackoverflow.com/questions/13898423/javascript-convert-24-hour-time-of-day-string-to-12-hour-time-with-am-pm-and-no
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

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
          <h5>{tConvert(props.med.fields.taken)}</h5>
          <UpdateMed med={props.med} onUpdateMed={props.onUpdateMed} />
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
