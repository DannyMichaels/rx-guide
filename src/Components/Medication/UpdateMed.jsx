import React, { useState } from 'react';
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

const UpdateMed = (props) => {
  const [name] = useState(props.med.fields.name);

  const [taken, setTaken] = useState(props.med.fields.taken);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const image = props.med.fields.image;

    const fields = {
      name,
      taken,
      image,
    };

    const updatedMed = {
      ...props.med,
      fields: {
        ...fields,
      },
    };

    editMed(fields, props.med.id);
    props.onUpdateMed(updatedMed);
  };

  return (
    <Form className="update-med" onSubmit={handleSubmit}>
      <label htmlFor="taken" type="text">
        Edit Time:
      </label>
      <input
        name="taken"
        type="time"
        value={taken}
        onChange={(e) => setTaken(e.target.value)}
      />
      <button className="edit-button" type="submit">
        <img src="https://i.imgur.com/SnXF0hi.png" alt="Edit" />
      </button>
    </Form>
  );
};

export default UpdateMed;
