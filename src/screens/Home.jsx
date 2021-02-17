import React, { useState, useEffect } from "react";
import Med from "../Components/Medication/Med";
import CreateMed from "../Components/Medication/CreateMed";
import { getMeds, getAddedMeds } from "../services/axiosRequests";
import { CircularProgress } from "@material-ui/core";
import { getSortedMeds } from "../services/sortedMeds";

export default function Home() {
  const [addedMeds, setAddedMeds] = useState([]);
  const [prescribedMeds, setPrescribedMeds] = useState([]);
  const [fetchMeds, setFetchMeds] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      const prescriptionResponse = await getMeds();
      setPrescribedMeds(prescriptionResponse);
    };
    getApi();
  }, []);

  useEffect(() => {
    const getApi = async () => {
      const addedMedsResponse = await getAddedMeds();
      setAddedMeds(getSortedMeds(addedMedsResponse));
    };
    getApi();
  }, [fetchMeds]);

  const PRESCRIPTIONS = React.Children.toArray(
    addedMeds?.map((med) => (
      <Med
        editable={true}
        med={med}
        fetchMeds={fetchMeds}
        setFetchMeds={setFetchMeds}
      />
    ))
  );

  return (
    <>
      <div>
        {!addedMeds ? (
          <CircularProgress
            style={{ marginLeft: "50%", marginTop: "10%", width: "50px" }}
          />
        ) : (
          <>
            {PRESCRIPTIONS}
            <CreateMed
              meds={prescribedMeds}
              fetchMeds={fetchMeds}
              setFetchMeds={setFetchMeds}
            />
          </>
        )}
      </div>
    </>
  );
}
