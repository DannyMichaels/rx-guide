import React, { useState, useEffect } from "react";
import Med from "../Components/Medication/Med";
import { Link } from "react-router-dom";
import { getMeds } from "../services/axiosRequests";
import Search from "../Components/Forms/Search";
import { CircularProgress } from "@material-ui/core";

const About = () => {
  const [allMeds, setAllMeds] = useState([]);
  const [fetchMeds, setFetchMeds] = useState(false);
  const [queriedMeds, setQueriedMeds] = useState([]);

  const [search, setSearch] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      const medications = await getMeds();
      setAllMeds(medications);
      setQueriedMeds(medications);
    };
    getApi();
  }, [fetchMeds]);

  const filteredMeds = allMeds.filter((med) =>
    med.fields.name.toLowerCase().includes(`${search}`.toLowerCase())
  );

  const MEDS = React.Children.toArray(
    allMeds.map((med) => (
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/medication/${med.fields.name}`}>
        <Med
          style={{ textAlign: "center" }}
          med={med}
          fetchMeds={fetchMeds}
          setFetchMeds={setFetchMeds}
          editable={false}
        />
      </Link>
    ))
  );

  const medsJSX = React.Children.toArray(
    filteredMeds.map((med) => (
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/medication/${med.fields.name}`}>
        <Med
          med={med}
          fetchMeds={fetchMeds}
          setFetchMeds={setFetchMeds}
          editable={false}
        />
      </Link>
    ))
  );

  if (!allMeds) {
    return (
      <CircularProgress
        style={{ marginLeft: "50%", marginTop: "10%", width: "50px" }}
      />
    );
  }

  return (
    <div>
      <div className="about-text">
        <h1 style={{ textShadow: "2px 2px peachpuff" }}>About RXGuide:</h1>
        <p
          style={{
            textShadow: "2px 2px peachpuff",
            marginLeft: "100px",
            marginRight: "100px",
          }}>
          RXGuide, created by Daniel Michael, is an app made to help the user
          organize his medication. The user will be able to add, edit or remove
          medication.
        </p>
      </div>

      <Search setSearch={setSearch} />

      {!search ? (
        <div>
          <h2
            style={{
              textAlign: "center",
              textShadow: "2px 2px peachpuff",
              color: "black",
            }}>
            List of Medications:
          </h2>
          <div className="med-container">{MEDS}</div>
        </div>
      ) : (
        <div className="med-container">{medsJSX}</div>
      )}
    </div>
  );
};

export default About;
