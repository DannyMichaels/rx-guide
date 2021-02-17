import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { MedStateContext } from "../context/medContext";

export default function MedDetail() {
  const [med, setMed] = useState({});

  const params = useParams();

  const { allMeds } = useContext(MedStateContext);

  useEffect(() => {
    const getMed = async () => {
      const oneMed = allMeds.find((m) => m.fields.name === params.name);
      setMed(oneMed);
    };
    getMed();
  }, [allMeds, params]);

  if (!med?.fields?.image) {
    return (
      <>
        <CircularProgress
          style={{ marginLeft: "50%", marginTop: "10%", width: "50px" }}
        />
      </>
    );
  }

  return (
    <>
      <div className="about-text" style={{ textShadow: "2px 2px peachpuff" }}>
        <h1>{med?.fields?.name} </h1>
        {med?.fields?.medClass !== undefined && (
          <h2>Class: {med?.fields?.medClass}</h2>
        )}
        <h2>Description:</h2>
        <h4 style={{ marginLeft: "100px", marginRight: "100px" }}>
          {med?.fields?.description}
        </h4>
        <img
          src={med?.fields?.image}
          style={{ maxWidth: "350px", maxHeight: "350px" }}
          alt="medication"
        />
      </div>
    </>
  );
}
