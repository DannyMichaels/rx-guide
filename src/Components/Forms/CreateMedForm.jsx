import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  button {
    background: none;
    border: none;
  }
  button:focus {
    outline: none;
  }
  img {
    width: 40%;
    height: 40%;
  }

  select {
    border: peachpuff;
    cursor: pointer;
    text-align-last: center;
    margin: 10px;
  }

  .select-css {
    width: 100%;
    font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial',
      sans-serif;
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
    font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial',
      sans-serif;
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
  img {
    width: 70px;
    height: 70px;
  }
`;

class CreateMedForm extends Component {
  render() {
    const MEDS = React.Children.toArray(
      this.props.meds.map((med) => <option>{med.fields.name}</option>)
    );

    return (
      <Form onSubmit={this.props.handleSubmit}>
        <label htmlFor="name" type="text">
          Name:
        </label>
        <select
          className="select-css"
          name="name"
          type="text"
          value={this.props.name}
          onChange={(e) => this.props.onChange(e)}>
          {MEDS}
        </select>

        <label htmlFor="taken" type="text">
          Taken At:
        </label>
        <input
          name="taken"
          type="time"
          value={this.props.taken}
          onChange={(e) => this.props.onChange(e)}
        />
        {navigator?.userAgent?.indexOf('Firefox') !== -1 && (
          <p>
            Sorry, the time selector is unsupported on Firefox, try a different
            browser!
          </p>
        )}
        <button type="Submit">
          <img
            className="add"
            src="https://i.imgur.com/BZOV6FC.png"
            alt="Submit"
          />
        </button>
      </Form>
    );
  }
}

export default CreateMedForm;
