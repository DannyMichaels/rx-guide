import axios from "axios";

const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions`;

export const getMeds = async () => {
  try {
    const response = await axios.get(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    const meds = response.data.records;
    return meds;
  } catch (error) {
    throw error;
  }
};

// work on this
export const getMedDetail = async (medName) => {
  try {
    const response = await axios.get(`${airtableURL}?filterByFormula=FIND(${medName},{name})>0`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    const meds = response.data.records;
    return meds;
  } catch (error) {
    throw error;
  }
};



const addedMedsUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/addedMeds`

export const getAddedMeds = async () => {
  try {
    const response = await axios.get(addedMedsUrl, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    const addedMeds = response.data.records;
    return addedMeds;
  } catch (error) {
    throw error;
  }
};



// export const getDeleteMeds = async (props) => {
//   const deleteURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions/${props.med.id}`
//   await axios.delete(deleteURL, {
//     headers: {
//       Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//     },
//   });
// }
  
  
