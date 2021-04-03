import React, { Component } from 'react';
import Med from '../Components/Medication/Med';
import { Link } from 'react-router-dom';
import Search from '../Components/Forms/Search';
import { CircularProgress } from '@material-ui/core';
import { AZ, ZA } from '../utils/sort';
import Sort from '../Components/Forms/Sort';
import { getMeds } from '../services/globalMeds';

class About extends Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);

    this.state = {
      queriedMeds: [],
      allMeds: [],
      sortType: '',
      isSearching: false,
    };
  }

  async componentDidMount() {
    let medData = await getMeds();

    this.setState((prevState) => ({
      ...prevState,
      queriedMeds: medData,
      allMeds: medData,
    }));

    this.state.queriedMeds && this.handleSort('name-ascending');
  }

  handleSort(type) {
    this.setState((prevState) => ({
      ...prevState,
      sortType: type,
    }));
    switch (type) {
      case 'name-ascending':
        this.setState((prevState) => ({
          ...prevState,
          queriedMeds: AZ(this.state.queriedMeds),
        }));

        break;
      case 'name-descending':
        this.setState((prevState) => ({
          ...prevState,
          queriedMeds: ZA(this.state.queriedMeds),
        }));
        break;
      default:
    }
  }

  handleSearch(e) {
    const { value } = e.target;

    const onSort = () => this.handleSort(this.state.sortType);

    const newQueriedMeds = this.state.allMeds.filter((med) =>
      med.fields.name.toLowerCase().includes(value.toLowerCase())
    );

    this.setState(
      (prevState) => ({
        ...prevState,
        isSearching: value,
        queriedMeds: newQueriedMeds,
      }),
      onSort
    );
  }

  onSelectChange(e) {
    this.handleSort(e.target.value);
  }

  render() {
    const medsJSX = this.state.queriedMeds.map((med) => (
      <Link
        key={med.id}
        style={{ color: 'black', textDecoration: 'none' }}
        to={`/medication/${med.fields.name}`}>
        <Med med={med} editable={false} />
      </Link>
    ));

    if (this.context.medsAreLoading) {
      return (
        <CircularProgress
          style={{ marginLeft: '50%', marginTop: '10%', width: '50px' }}
        />
      );
    }

    return (
      <div>
        <div className="about-text">
          <h1 style={{ textShadow: '2px 2px peachpuff' }}>About RXGuide:</h1>
          <p
            style={{
              textShadow: '2px 2px peachpuff',
              marginLeft: '100px',
              marginRight: '100px',
            }}>
            RXGuide, created by Daniel Michael, is an app made to help the user
            organize his medication. The user will be able to add, edit or
            remove medication.
          </p>
        </div>

        <div className="search-container">
          <Search
            handleSearch={this.handleSearch}
            onSortChange={this.onSelectChange}
          />
          <Sort onChange={this.onSelectChange} />
        </div>

        <div>
          <h2
            style={{
              textAlign: 'center',
              textShadow: '2px 2px peachpuff',
              color: 'black',
            }}>
            {this.state.isSearching ? 'Search Results' : 'List of Medications'}
          </h2>

          <div className="med-container">{medsJSX}</div>
        </div>
      </div>
    );
  }
}

export default About;
