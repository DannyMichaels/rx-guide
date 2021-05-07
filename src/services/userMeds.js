import axios from 'axios';

const addedMedsUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/addedMeds`;

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

export const prescribeMed = async (fields) => {
  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/addedMeds`;
  try {
    const response = await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editMed = async (fields, medId) => {
  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/addedMeds/${medId}`;
  await axios.put(
    airtableURL,
    { fields },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    }
  );
};

export const deleteMed = async (medId) => {
  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/addedMeds/${medId}`;
  await axios.delete(airtableURL, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
    },
  });
};
