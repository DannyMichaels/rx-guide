export const medReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        allMeds: action.allMeds,
      };
    case "SET_MEDS":
      return {
        allMeds: action.payload,
      };
    default:
      return state;
  }
};
