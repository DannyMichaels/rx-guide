import React, { createContext, useReducer, useMemo } from "react";
import { medReducer } from "../reducers/medReducer";
import { getMeds } from "../services/globalMeds";
export const MedStateContext = createContext();
export const MedDispatchContext = createContext();

const MedContextProvider = ({ children }) => {
  const initialMedState = {
    allMeds: [],
    medsAreLoading: true,
  };

  const [state, dispatch] = useReducer(medReducer, initialMedState);

  useMemo(async () => {
    const medData = await getMeds();
    dispatch({ type: "INIT", allMeds: medData, medsAreLoading: false });
  }, []);

  return (
    <MedStateContext.Provider value={state}>
      <MedDispatchContext.Provider value={dispatch}>
        {children}
      </MedDispatchContext.Provider>
    </MedStateContext.Provider>
  );
};

export default MedContextProvider;
