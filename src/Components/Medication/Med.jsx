import React, { Component } from 'react';
import UpdateMed from './UpdateMed';
import { CircularProgress } from '@material-ui/core';
import { deleteMed } from '../../services/userMeds';

class Med extends Component {
  constructor(props) {
    super(props);
    // this.props.onAddMed = this.props.onAddMed.bind(this);
    this.state = {
      isRefreshed: false,
    };
  }

  handleDelete = async () => {
    this.setState({ isRefreshed: true });

    setTimeout(async () => {
      await deleteMed(this.props.med.id);
      this.props.onDeleteMed(this.props.med.id);
      this.setState({ isRefreshed: false });
    }, 150);
  };

  render() {
    const { med, editable, onUpdateMed } = this.props;
    const { isRefreshed } = this.state;

    return (
      <div className="med">
        <h3>{med.fields.name}</h3>
        <img
          src={med.fields.image}
          width="100"
          height="50"
          alt={med.fields.name}
        />

        {editable && (
          <div>
            <h4>Taken At: </h4> <h5>{med.fields.taken}</h5>
            <UpdateMed med={med} onUpdateMed={onUpdateMed} />
            <button onClick={this.handleDelete} className="edit-button">
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
  }
}

export default Med;
