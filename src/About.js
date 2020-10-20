import React, { useState, useEffect } from "react";
import axios from "axios";
import Med from "./Med";
import styled from "styled-components";

const Form = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 50vw;
    font-size: 18px;
    letter-spacing: 0.1px;
    padding: 12px 20px 12px 40px;
    border: 1px solid pink;
    margin: 40px;
    text-transform: capitalize;
    text-align: center;
    box-shadow: 5px 5px peachpuff;
  }
  input:focus {
    outline: none;
  }
`;

const About = () => {
  const [meds, setMeds] = useState([]);
  const [fetchMeds, setFetchMeds] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getApi = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });

      const sortedMeds = response.data.records.sort((recordA, recordB) => {
        const date1 = new Date(recordA.createdTime).getTime();
        const date2 = new Date(recordB.createdTime).getTime();

        if (date1 < date2) {
          return -1;
        } else if (date1 > date2) {
          return 1;
        } else {
          return 0;
        }
      });
      setMeds(sortedMeds);
    };
    getApi();
  }, [fetchMeds]);

  const filteredMeds = meds.filter((med) =>
    med.fields.name.toLowerCase().includes(`${search}`)
  );

  return (
    <div>
      <div className="about-text">
        <h1>About RXGuide:</h1>
        <p>
          RXGuide, created by Daniel Michael, is an app made to help the user
          organize his medication. The user will be able to add, edit or remove
          medication.
        </p>
      </div>
      <Form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Medication"
          value={search.toLowerCase()}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      {search === "" ? (
        <h2 style={{ textAlign: "center" }}>List of Medications:</h2>
      ) : (
        <div className="med-container">
          {filteredMeds.map((med, index) => (
            <Med
              med={med}
              fetchMeds={fetchMeds}
              setFetchMeds={setFetchMeds}
              editable={false}
            />
          ))}
        </div>
      )}

      {search === "" ? (
        <div className="med-container">
          {meds.map((med) => (
            <Med
              style={{ textAlign: "center" }}
              med={med}
              fetchMeds={fetchMeds}
              setFetchMeds={setFetchMeds}
              editable={false}
            />
          ))}
        </div>
      ) : <> </> }
    </div>
  );
};

export default About;
