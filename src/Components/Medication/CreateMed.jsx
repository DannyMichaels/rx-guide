import React, { Component } from 'react';
import CreateMedForm from '../Forms/CreateMedForm';
import { MedStateContext } from '../../context/medContext';
import { prescribeMed } from '../../services/userMeds';

class CreateMed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Prozac',
      taken: '',
    };
  }

  async handleSubmit(e) {
    const { name, taken } = this.state;
    const { allMeds } = this.context;

    e.preventDefault();
    const selectedMed = allMeds.find(
      (m) => m.fields.name.trim() === name.trim()
    );

    if (!taken) {
      alert('You have to choose the time!');
      return;
    }

    const image = selectedMed?.fields?.image;

    const fields = {
      name,
      image,
      taken,
    };

    const newMed = await prescribeMed(fields);

    this.props.onAddMed(newMed);
    this.setState({ name: '', taken: '' });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  render() {
    const {
      context: { allMeds },
      state: { name, taken },
    } = this;

    return (
      <CreateMedForm
        meds={allMeds}
        name={name}
        taken={taken}
        onChange={(this.handleChange = this.handleChange.bind(this))}
        handleSubmit={(this.handleSubmit = this.handleSubmit.bind(this))}
      />
    );
  }
}

CreateMed.contextType = MedStateContext;

export default CreateMed;
