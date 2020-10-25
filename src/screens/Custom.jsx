import React, { useState } from "react";
import axios from "axios";
import CustomMedForm from '../Components/Forms/CustomMedForm'


function Custom() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

   
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

      
    if (window.confirm(`Are you sure you want to add this medication?
    \n Name: ${name} \n Description: ${description} \n Image URL: ${image}`)) {
     
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

      <CustomMedForm 
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        image={image} setImage={setImage}
        />

    </div>
  );
}

export default Custom;
