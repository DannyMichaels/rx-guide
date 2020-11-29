import React, { useState } from "react";
import axios from "axios";
import CreateMedForm from "../Forms/CreateMedForm";

const CreateMed = (props) => {
  const [name, setName] = useState("Prozac");
  const [taken, setTaken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedMed = props.meds.find(
      (m) => m.fields.name.trim() === name.trim()
    );

    if (!taken) {
      alert("You have to choose the time!");
      return;
    }
    const image = selectedMed?.fields?.image;

    const fields = {
      name,
      image,
      taken,
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/addedMeds`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );

    props.setFetchMeds(!props.fetchMeds);
    setName("");
    setTaken("");
  };

  return (
    <CreateMedForm
      med={props.med}
      meds={props.meds}
      taken={taken}
      setTaken={setTaken}
      name={name}
      setName={setName}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateMed;
