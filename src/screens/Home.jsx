import React, { useState, useEffect, useContext } from "react";
import Med from "../Components/Medication/Med";
import CreateMed from "../Components/Medication/CreateMed";
import { getAddedMeds } from "../services/axiosRequests";
import { CircularProgress } from "@material-ui/core";
import { getSortedMeds } from "../services/sortedMeds";
import { MedStateContext } from "../context/medContext";

export default function Home() {
  const [addedMeds, setAddedMeds] = useState([]);
  const [fetchMeds, setFetchMeds] = useState(false);

  const { medsAreLoading } = useContext(MedStateContext);

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
        {medsAreLoading ? (
          <CircularProgress
            style={{ marginLeft: "50%", marginTop: "10%", width: "50px" }}
          />
        ) : (
          <>
            {PRESCRIPTIONS}
            <CreateMed fetchMeds={fetchMeds} setFetchMeds={setFetchMeds} />
          </>
        )}
      </div>
    </>
  );
}
