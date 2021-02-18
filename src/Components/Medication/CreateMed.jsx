import React, { useState, useContext } from "react";
import CreateMedForm from "../Forms/CreateMedForm";
import { MedStateContext } from "../../context/medContext";
import { prescribeMed } from "../../services/userMeds";

const CreateMed = (props) => {
  const [name, setName] = useState("Prozac");
  const [taken, setTaken] = useState("");

  const { allMeds } = useContext(MedStateContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedMed = allMeds.find(
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

    prescribeMed(fields);

    props.setFetchMeds(!props.fetchMeds);
    setName("");
    setTaken("");
  };

  return (
    <CreateMedForm
      med={props.med}
      meds={allMeds}
      taken={taken}
      setTaken={setTaken}
      name={name}
      setName={setName}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateMed;
