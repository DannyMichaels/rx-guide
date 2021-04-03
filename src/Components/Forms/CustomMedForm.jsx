import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { MedDispatchConsumer, MedStateContext } from '../../context/medContext';
import { createCustomMed } from '../../services/globalMeds';

const Form = styled.form`
  input {
    border: peachpuff;
    padding: 10px;
    text-align: center;
    margin: 5px;
  }
  input:focus {
    outline: none;
  }
  textarea {
    border: peachpuff;
    padding-bottom: 20px;
    text-align: center;
    margin: 5px;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }
  button {
    background: none;
    border: none;
  }
  button:focus {
    outline: none;
  }
  img {
    width: 70px;
    height: 70px;
  }
`;

class CustomMedForm extends Component {
  constructor(props) {
    super(props);
    this.handleImagePreview = this.handleImagePreview.bind(this);
    this.state = {
      imagePreview: false,
    };
  }

  handleImagePreview(e) {
    e.preventDefault();
    this.setState({ imagePreview: this.props.image });
  }

  render() {
    const { props } = this;
    const { imagePreview } = this.state;

    return (
      <MedDispatchConsumer>
        {(data) => {
          const dispatch = data;

          const handleSubmit = async (e) => {
            e.preventDefault();
            const { name, medClass, description, image } = props;

            if (
              window.confirm(`Are you sure you want to add this medication?
    \n Name: ${name}\n Class: ${medClass} \n Description: ${description} \n Image URL: ${image}`)
            ) {
              alert('Medication Added!');
            } else {
              return;
            }
            const fields = {
              name,
              description,
              image,
              medClass,
            };

            const createdMed = await createCustomMed(fields);

            dispatch({ type: 'CREATE_MED', payload: createdMed });
            this.setState({
              name: '',
              image: '',
              description: '',
              medClass: '',
            });

            props.history.push('/about');
          };

          return (
            <>
              <Form onSubmit={handleSubmit}>
                <label htmlFor="name" type="text">
                  Name:
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Drug Name"
                  required
                  autoFocus
                  value={props.name}
                  onChange={(e) => props.handleChange(e)}
                />

                <label htmlFor="class" type="text">
                  Class:
                </label>
                <input
                  name="medClass"
                  type="text"
                  required
                  autoFocus
                  placeholder="Enter Drug Class"
                  value={props.medClass}
                  onChange={(e) => props.handleChange(e)}
                />

                <label htmlFor="description" type="text">
                  Description:
                </label>
                <textarea
                  name="description"
                  type="text"
                  className="input-description"
                  placeholder="Enter Drug Description"
                  value={props.description}
                  required
                  autoFocus
                  onChange={(e) => props.handleChange(e)}
                />

                <label htmlFor="image" type="text">
                  Image:
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="https://image.png/"
                  value={props.image}
                  required
                  autoFocus
                  onChange={(e) => props.handleChange(e)}
                />
                <button
                  style={{
                    backgroundColor: 'white',
                    margin: '10px',
                    fontFamily: 'Sansita Swashed',
                  }}
                  onClick={this.handleImagePreview}>
                  Preview Medication
                </button>
                <button>
                  <img
                    src="https://i.imgur.com/BZOV6FC.png"
                    alt="add custom medication"
                  />
                </button>
              </Form>

              {imagePreview && (
                <h2 style={{ marginTop: '50px' }}>Medication Preview:</h2>
              )}

              {imagePreview && (
                <div className="med">
                  <h3>{props.name}</h3>
                  <img
                    src={imagePreview}
                    style={{ maxWidth: '50px' }}
                    alt={props.name}
                  />
                </div>
              )}
            </>
          );
        }}
      </MedDispatchConsumer>
    );
  }
}

CustomMedForm.contextType = MedStateContext;

export default withRouter(CustomMedForm);
