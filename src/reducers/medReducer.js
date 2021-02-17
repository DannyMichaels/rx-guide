export const initialState = {
  allMeds: [],
};

export const medReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        allMeds: action.allmeds,
      };
    // case "EDIT_MED":
    //   return { addedMeds: action.addedMeds };
    // case "REMOVE_MED":
    //   return { addedMeds: null };
    default:
      return state;
  }
};
