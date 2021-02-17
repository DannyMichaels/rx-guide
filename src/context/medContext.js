import React, { createContext, useMemo, useReducer } from "react";
import { medReducer } from "../reducers/medReducer";
import { getMeds } from "../services/axiosRequests";

export const MedStateContext = createContext();
export const MedDispatchContext = createContext();
export const MedStateConsumer = MedStateContext.Consumer;
export const MedDispatchConsumer = MedDispatchContext.Consumer;

const MedContextProvider = ({ children }) => {
  const initialMedState = {
    allMeds: [],
  };

  const [state, dispatch] = useReducer(medReducer, initialMedState);

  useMemo(() => {
    const getApi = async () => {
      const medData = await getMeds();
      dispatch({ type: "INIT", allMeds: medData });
    };
    getApi();
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
