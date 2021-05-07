import React, { useState, useEffect, useContext } from 'react';
import Med from '../Components/Medication/Med';
import CreateMed from '../Components/Medication/CreateMed';
import { getAddedMeds } from '../services/userMeds';
import { CircularProgress } from '@material-ui/core';
import { getSortedMeds } from '../utils/sortedMeds';
import { MedStateContext } from '../context/medContext';

export default function Home() {
  const [addedMeds, setAddedMeds] = useState([]);

  const { medsAreLoading } = useContext(MedStateContext);

  useEffect(() => {
    const getApi = async () => {
      const addedMedsResponse = await getAddedMeds();
      setAddedMeds(getSortedMeds(addedMedsResponse));
    };
    getApi();
  }, []);

  const onAddMed = (newMed) => {
    setAddedMeds((prevState) => [...prevState, newMed]);
  };

  const onDeleteMed = (removedMedId) => {
    setAddedMeds((prevState) =>
      prevState.filter((med) => med.id !== removedMedId)
    );
  };

  const onUpdateMed = (updatedMed) => {
    setAddedMeds((prevState) =>
      prevState.map((med) => (med.id === updatedMed.id ? updatedMed : med))
    );
  };

  const PRESCRIPTIONS = addedMeds?.map((med) => (
    <Med
      key={med.id}
      editable={true}
      med={med}
      onDeleteMed={onDeleteMed}
      onUpdateMed={onUpdateMed}
    />
  ));

  return (
    <>
      <div>
        {medsAreLoading ? (
          <CircularProgress
            style={{ marginLeft: '50%', marginTop: '10%', width: '50px' }}
          />
        ) : (
          <>
            {PRESCRIPTIONS}
            <CreateMed onAddMed={onAddMed} />
          </>
        )}
      </div>
    </>
  );
}
