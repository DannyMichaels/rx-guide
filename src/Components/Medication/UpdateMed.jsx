import React, { Component } from 'react';
import styled from 'styled-components';
import { editMed } from '../../services/userMeds';

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

  img {
    margin-top: 5px;
    width: 50px;
    height: 50px;
  }
`;

class UpdateMed extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      taken: props.med.fields.taken,
    };
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { image, name } = this.props.med.fields;

    const fields = {
      name,
      taken: this.state.taken,
      image,
    };

    const updatedMed = {
      ...this.props.med,
      fields: {
        ...fields,
      },
    };

    editMed(fields, this.props.med.id);
    this.props.onUpdateMed(updatedMed);
  }

  handleChange(e) {
    this.setState({ taken: e.target.value });
  }

  render() {
    return (
      <Form className="update-med" onSubmit={this.handleSubmit}>
        <label htmlFor="taken" type="text">
          Edit Time:
        </label>
        <input
          name="taken"
          type="time"
          value={this.state.taken}
          onChange={(e) => this.handleChange(e)}
        />
        <button className="edit-button" type="submit">
          <img src="https://i.imgur.com/SnXF0hi.png" alt="Edit" />
        </button>
      </Form>
    );
  }
}

export default UpdateMed;
