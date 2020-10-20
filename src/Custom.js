import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components'



function Custom(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    //  const image = props.med.fields.image
   
    if (!name) {
      alert('You have to add a name!')
      return 
    } else if (!description) {
      alert('You have to add a description!')
      return
    } else if (!image) {
      alert('You have to add a image')
      return
    }

    alert("Medication Added!")


    const fields = {
      name,
      description,
      image,
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions/`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    setName("");
    setImage("");
    setDescription("");
  };

  return (
    <div className="about-text">
      <h1 style={{ textShadow: '2px 2px peachpuff', color: 'black'}}>Add your own custom medication!</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="name" type="text">
          Name:
        </label>
        <input
          name="name"
          type="text"
          placeholder="Enter Drug Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description" type="text">
          Description:
        </label>
        <textarea
          name="description"
          type="text"
          className="input-description"
          placeholder="Drug Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="image" type="text">
          Image:
        </label>
        <input
          name="image"
          type="text"
          placeholder="https://image.png"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button><img src='https://i.imgur.com/BZOV6FC.png' className='add' alt='add custom medication'/></button>
      </Form>
    </div>
  );
}

export default Custom;

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
img{
  width: 40%;
  height: 40%; 
}
`