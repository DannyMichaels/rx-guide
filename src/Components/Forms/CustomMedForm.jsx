import React from 'react'
import styled from 'styled-components'

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
img{
  width: 40%;
  height: 40%; 
}
`


const CustomMedForm = (props) => 
      
<Form onSubmit={props.handleSubmit}>
      <label htmlFor="name" type="text">
        Name:
      </label>
      <input
        name="name"
        type="text"
        placeholder="Enter Drug Name"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />

      <label htmlFor="description" type="text">
        Description:
      </label>
      <textarea
        name="description"
        type="text"
        className="input-description"
        placeholder="Drug Description"
        value={props.description}
        onChange={(e) => props.setDescription(e.target.value)}
      ></textarea>

      <label htmlFor="image" type="text">
        Image:
      </label>
      <input
        name="image"
        type="text"
        placeholder="https://image.png"
        value={props.image}
        onChange={(e) => props.setImage(e.target.value)}
      />

      <button><img src='https://i.imgur.com/BZOV6FC.png' className='add' alt='add custom medication'/></button>
  </Form>
    
    export default CustomMedForm