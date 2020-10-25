import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeds } from "../../services/axiosCalls";

export default function MedDetail() {
  const params = useParams();

  const [med, setMed] = useState([]);

  useEffect( () => {
    const getApi = async () => {
        const response = await getMeds()
        const med = response.find((m) =>  m.fields.name === params.name)
      setMed(med);
  };
  getApi();
  }, [params]);


  return (
    <div>
      <h1>Name: {med?.fields?.name} </h1>
      <h2>Description {med?.fields?.description}</h2>  
      <img src={med?.fields?.image} alt="medication" />
    </div>
  );
}
