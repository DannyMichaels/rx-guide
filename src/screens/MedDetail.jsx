import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import { MedStateContext } from '../context/medContext';
import { getMeds } from '../services/globalMeds';

class MedDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      med: {},
    };
  }

  async componentDidMount() {
    let { params } = this.props.match;
    let allMeds = [];

    if (!allMeds.length) {
      // if someone typed this in url (no useEffect, and componentDidUpdate causes errors due to re-renders)
      allMeds = await getMeds().then((resp) => resp);
    } else {
      // else get them from the context
      allMeds = this.context.allMeds;
    }

    const oneMed = allMeds?.find((m) => m.fields.name === params.name);
    this.setState({ med: oneMed });
  }

  render() {
    const { med } = this.state;

    if (!med?.fields?.image) {
      return (
        <CircularProgress
          style={{ marginLeft: '50%', marginTop: '10%', width: '50px' }}
        />
      );
    }

    return (
      <div className="about-text" style={{ textShadow: '2px 2px peachpuff' }}>
        <h1>{med?.fields?.name} </h1>
        {med?.fields?.medClass !== undefined && (
          <h2>Class: {med?.fields?.medClass}</h2>
        )}
        <h2>Description:</h2>
        <h4 style={{ marginLeft: '100px', marginRight: '100px' }}>
          {med?.fields?.description}
        </h4>
        <img
          src={med?.fields?.image}
          style={{ maxWidth: '350px', maxHeight: '350px' }}
          alt="medication"
        />
      </div>
    );
  }
}

MedDetail.contextType = MedStateContext;

export default MedDetail;
