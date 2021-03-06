export const medReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        allMeds: action.allMeds,
      };
    case "CREATE_MED":
      return { ...state, allMeds: [...state.allMeds, action.payload] };
    default:
      return state;
  }
};
