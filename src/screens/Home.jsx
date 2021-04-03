import React, { Component } from 'react';
import Med from '../Components/Medication/Med';
import CreateMed from '../Components/Medication/CreateMed';
import { getAddedMeds } from '../services/userMeds';
import { CircularProgress } from '@material-ui/core';
import { getSortedMeds } from '../utils/sortedMeds';
import { MedStateContext } from '../context/medContext';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedMeds: [],
      fetchMeds: false,
    };
  }
  componentDidMount() {
    const getApi = async () => {
      const addedMedsResponse = await getAddedMeds();
      this.setState((prevState) => ({
        ...prevState,
        addedMeds: getSortedMeds(addedMedsResponse),
      }));
    };
    getApi();
  }

  setFetchMeds() {
    this.setState((prevState) => ({
      ...prevState,
      fetchMeds: !this.state.fetchMeds,
    }));
  }

  render() {
    const { addedMeds, fetchMeds } = this.state;
    const { medsAreLoading } = this.context;

    const PRESCRIPTIONS = addedMeds?.map((med) => (
      <Med
        key={med.id}
        editable={true}
        med={med}
        fetchMeds={fetchMeds}
        setFetchMeds={(this.setFetchMeds = this.setFetchMeds.bind(this))}
      />
    ));

    return (
      <>
        <div>
          {medsAreLoading ? (
            <CircularProgress
              style={{ marginLeft: '50%', marginTop: '10%', width: '50px' }}
            />
          ) : (
            <>
              {PRESCRIPTIONS}
              <CreateMed
                fetchMeds={fetchMeds}
                setFetchMeds={
                  (this.setFetchMeds = this.setFetchMeds.bind(this))
                }
              />
            </>
          )}
        </div>
      </>
    );
  }
}

Home.contextType = MedStateContext;

export default Home;
