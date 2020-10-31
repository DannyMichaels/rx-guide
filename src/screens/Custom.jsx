import React, { useState } from "react";
import axios from "axios";
import CustomMedForm from '../Components/Forms/CustomMedForm'
import { Redirect } from 'react-router-dom'


function Custom() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [medClass, setMedClass] = useState("")
  const [isCreated, setCreated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (window.confirm(`Are you sure you want to add this medication?
    \n Name: ${name}\n Class: ${medClass} \n Description: ${description} \n Image URL: ${image}`)) {
     
      alert("Medication Added!")
    } else {
      return
    }

    const fields = {
      name,
      description,
      image,
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions/`;
    const created = await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    setCreated({ created })
    setName("");
    setImage("");
    setDescription("");
  };

  if (isCreated) {
    return <Redirect to={'/about'}/>
  }
  return (
    <div className="about-text">
      <h1 style={{ textShadow: '2px 2px peachpuff', color: 'black'}}>Add your own custom medication!</h1>

      <CustomMedForm 
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        image={image} setImage={setImage}
        medClass={medClass} setMedClass={setMedClass}
        />

    </div>
  );
}

export default Custom;

