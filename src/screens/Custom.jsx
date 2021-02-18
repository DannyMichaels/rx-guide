import React, { useState, useContext } from "react";
import axios from "axios";
import CustomMedForm from "../Components/Forms/CustomMedForm";
import { useHistory } from "react-router-dom";
import { MedDispatchContext } from "../context/medContext";

function Custom() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [medClass, setMedClass] = useState("");

  const dispatch = useContext(MedDispatchContext);
  const { push } = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      window.confirm(`Are you sure you want to add this medication?
    \n Name: ${name}\n Class: ${medClass} \n Description: ${description} \n Image URL: ${image}`)
    ) {
      alert("Medication Added!");
    } else {
      return;
    }

    const fields = {
      name,
      description,
      image,
      medClass,
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions/`;
    const medData = await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );

    const data = medData.data;

    setName("");
    setImage("");
    setMedClass("");
    setDescription("");

    await dispatch({ TYPE: "CREATE_MED", payload: data });
    push("/about");
  };

  return (
    <div className="about-text">
      <h1 style={{ textShadow: "2px 2px peachpuff", color: "black" }}>
        Add your own custom medication!
      </h1>

      <CustomMedForm
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        medClass={medClass}
        setMedClass={setMedClass}
      />
    </div>
  );
}

export default Custom;
