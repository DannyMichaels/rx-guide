import React, { useState, useEffect, useMemo, useContext } from "react";
import Med from "../Components/Medication/Med";
import { Link } from "react-router-dom";
import Search from "../Components/Forms/Search";
import { CircularProgress } from "@material-ui/core";
import { MedStateContext } from "../context/medContext";
import { AZ, ZA } from "../utils/sort";
import Sort from "../Components/Forms/Sort";

const About = () => {
  const [queriedMeds, setQueriedMeds] = useState([]);
  const [fetchMeds, setFetchMeds] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [sortType, setSortType] = useState("");
  const { allMeds, medsAreLoading } = useContext(MedStateContext);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQueriedMeds(AZ(queriedMeds));
        break;
      case "name-descending":
        setQueriedMeds(ZA(queriedMeds));
        break;
      default:
    }
  };

  useEffect(() => {
    setQueriedMeds(allMeds);
  }, [allMeds]);

  useMemo(() => {
    queriedMeds && handleSort("name-ascending");
    // eslint-disable-next-line
  }, [queriedMeds]);

  const handleSearch = (e) => {
    const { value } = e.target;

    const newQueriedMeds = allMeds.filter((med) =>
      med.fields.name.toLowerCase().includes(value.toLowerCase())
    );

    setIsSearching(value);          // Thanks Bruno!
    setQueriedMeds(newQueriedMeds, () => handleSort(sortType));
  };

  const onSelectChange = (e) => {
    handleSort(e.target.value);
  };

  const medsJSX = queriedMeds.map((med) => (
    <Link
      key={med.id}
      style={{ color: "black", textDecoration: "none" }}
      to={`/medication/${med.fields.name}`}>
      <Med
        med={med}
        fetchMeds={fetchMeds}
        setFetchMeds={setFetchMeds}
        editable={false}
      />
    </Link>
  ));

  if (medsAreLoading) {
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

      <div className="search-container">
        <Search handleSearch={handleSearch} onSortChange={onSelectChange} />
        <Sort onChange={onSelectChange} />
      </div>

      <div>        
          <h2
            style={{
              textAlign: "center",
              textShadow: "2px 2px peachpuff",
              color: "black",
            }}>
            {isSearching ? "Search Results" : "List of Medications"}
          </h2>

        <div className="med-container">{medsJSX}</div>
      </div>
    </div>
  );
};

export default About;
