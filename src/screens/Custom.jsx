import React, { Component } from 'react';
import CustomMedForm from '../Components/Forms/CustomMedForm';

class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      description: '',
      medClass: '',
    };
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  render() {
    return (
      <div className="about-text">
        <h1 style={{ textShadow: '2px 2px peachpuff', color: 'black' }}>
          Add your own custom medication!
        </h1>

        <CustomMedForm
          handleChange={(this.handleChange = this.handleChange.bind(this))}
          name={this.state.name}
          medClass={this.state.medClass}
          description={this.state.description}
          image={this.state.image}
        />
      </div>
    );
  }
}

export default Custom;
