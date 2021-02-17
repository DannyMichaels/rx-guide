import React, { createContext, useReducer } from "react";
import { medReducer } from "../reducers/medReducer";

export const MedStateContext = createContext();
export const MedDispatchContext = createContext();
export const MedStateConsumer = MedStateContext.Consumer;
export const MedDispatchConsumer = MedDispatchContext.Consumer;

const MedContextProvider = ({ children }) => {
  const initialMedState = {
    allMeds: [],
    medsAreLoading: true,
  };

  const [state, dispatch] = useReducer(medReducer, initialMedState);

  return (
    <MedStateContext.Provider value={state}>
      <MedDispatchContext.Provider value={dispatch}>
        {children}
      </MedDispatchContext.Provider>
    </MedStateContext.Provider>
  );
};

export default MedContextProvider;
