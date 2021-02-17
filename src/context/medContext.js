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

  // useMemo(async () => {
  //   const medData = await getMeds();
  //   console.log({ medData });
  //   dispatch({ type: "INIT", allMeds: medData, medsAreLoading: false });
  // }, []);

  return (
    <MedStateContext.Provider value={state}>
      <MedDispatchContext.Provider value={dispatch}>
        {children}
      </MedDispatchContext.Provider>
    </MedStateContext.Provider>
  );
};

export default MedContextProvider;
