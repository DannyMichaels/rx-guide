export const medReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        allMeds: action.allMeds,
      };
    default:
      return state;
  }
};
