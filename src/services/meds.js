import axios from "axios";

const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions`;
// const airtableURL2 = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/prescriptions/${props.med.id}`

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

// export const deleteMed = async () => {
//   try {
//     const response = await axios.delete(airtableURL2, {
//       headers: {
//         Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//       },
//     });
//     const meds = response.data.records;
//     return meds;
//   } catch (error) {
//     throw error;
//   }
// };