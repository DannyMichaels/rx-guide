import React, { useState } from "react";
import CustomMedForm from "../Components/Forms/CustomMedForm";
import { useHistory } from "react-router-dom";
import { createCustomMed } from "../services/axiosRequests";

function Custom() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    medClass: "",
  });

  const { name, image, description, medClass } = formData;

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

    createCustomMed(fields);

    setFormData("");
    push("/about");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="about-text">
      <h1 style={{ textShadow: "2px 2px peachpuff", color: "black" }}>
        Add your own custom medication!
      </h1>

      <CustomMedForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        name={name}
        medClass={medClass}
        description={description}
        image={image}
      />
    </div>
  );
}

export default Custom;
