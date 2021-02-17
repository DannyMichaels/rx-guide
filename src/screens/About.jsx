import React, { useState, useMemo, useContext } from "react";
import Med from "../Components/Medication/Med";
import { Link } from "react-router-dom";
import Search from "../Components/Forms/Search";
import { CircularProgress } from "@material-ui/core";
import { MedStateContext } from "../context/medContext";

const About = () => {
  // const [allMeds, setAllMeds] = useState([]);
  const [queriedMeds, setQueriedMeds] = useState([]);
  const [fetchMeds, setFetchMeds] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const { allMeds } = useContext(MedStateContext);

  useMemo(async () => {
    setQueriedMeds(allMeds);
  }, [allMeds]);

  const handleSearch = (event) => {
    const { value } = event.target;

    const newQueriedMeds = allMeds.filter((med) =>
      med.fields.name.toLowerCase().includes(value.toLowerCase())
    );

    setIsSearching(value);

    setQueriedMeds(newQueriedMeds);
  };

  const medsJSX = React.Children.toArray(
    queriedMeds.map((med) => (
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

      <Search handleSearch={handleSearch} />

      <div>
        {!isSearching && (
          <h2
            style={{
              textAlign: "center",
              textShadow: "2px 2px peachpuff",
              color: "black",
            }}>
            List of Medications:
          </h2>
        )}
        <div className="med-container">{medsJSX}</div>
      </div>
    </div>
  );
};

export default About;
