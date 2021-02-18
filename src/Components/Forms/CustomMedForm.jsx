import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  input {
    border: peachpuff;
    padding: 10px;
    text-align: center;
    margin: 5px;
  }
  input:focus {
    outline: none;
  }
  textarea {
    border: peachpuff;
    padding-bottom: 20px;
    text-align: center;
    margin: 5px;
    resize: none;
  }
  textarea:focus {
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

const CustomMedForm = (props) => {
  const [imagePreview, setImagePreview] = useState("");

  const handleImagePreview = (e) => {
    e.preventDefault();
    setImagePreview(props.image);
  };

  return (
    <>
      <Form onSubmit={props.handleSubmit}>
        <label htmlFor="name" type="text">
          Name:
        </label>
        <input
          name="name"
          type="text"
          placeholder="Enter Drug Name"
          required
          autoFocus
          value={props.name}
          onChange={(e) => props.handleChange(e)}
        />

        <label htmlFor="class" type="text">
          Class:
        </label>
        <input
          name="medClass"
          type="text"
          required
          autoFocus
          placeholder="Enter Drug Class"
          value={props.medClass}
          onChange={(e) => props.handleChange(e)}
        />

        <label htmlFor="description" type="text">
          Description:
        </label>
        <textarea
          name="description"
          type="text"
          className="input-description"
          placeholder="Enter Drug Description"
          value={props.description}
          required
          autoFocus
          onChange={(e) => props.handleChange(e)}
        />

        <label htmlFor="image" type="text">
          Image:
        </label>
        <input
          name="image"
          type="text"
          placeholder="https://image.png/"
          value={props.image}
          required
          autoFocus
          onChange={(e) => props.handleChange(e)}
        />
        <button
          style={{
            backgroundColor: "white",
            margin: "10px",
            fontFamily: "Sansita Swashed",
          }}
          onClick={handleImagePreview}>
          Preview Medication
        </button>
        <button>
          <img
            src="https://i.imgur.com/BZOV6FC.png"
            alt="add custom medication"
          />
        </button>
      </Form>
      {imagePreview && (
        <h2 style={{ marginTop: "50px" }}>Medication Preview:</h2>
      )}
      {imagePreview && (
        <div className="med">
          <h3>{props.name}</h3>
          <img
            src={imagePreview}
            style={{ maxWidth: "50px" }}
            alt={props.name}
          />
        </div>
      )}
    </>
  );
};
export default CustomMedForm;
