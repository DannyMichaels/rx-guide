import React, { useState } from 'react'
import styled from 'styled-components'

const Img = styled.img`
&:hover {
  cursor: default;
}
`

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


const CustomMedForm = (props) => {
  const [imagePreview, setImagePreview] = useState('')
  
  const handleClick = (e) => {
    e.preventDefault();
    setImagePreview(props.image)
  }

  return (
  <>
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

      <label htmlFor="class" type="text">
        Class:
      </label>
      <input
        name="class"
        type="text"
        placeholder="Enter Drug Class"
        value={props.medClass}
        onChange={(e) => props.setMedClass(e.target.value)}
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
        onChange={(e) => props.setDescription(e.target.value)}
      ></textarea>

      <label htmlFor="image" type="text">
        Image:
      </label>
      <input
        name="image"
        type="text"
        placeholder="https://image.png/"
        value={props.image}
        onChange={(e) => props.setImage(e.target.value)}
      />
        <button style={{ backgroundColor: 'white', margin: '10px', fontFamily: 'Sansita Swashed'}}onClick={handleClick}> Preview Image </button>
      <button><img src='https://i.imgur.com/BZOV6FC.png' className='add' alt='add custom medication' /></button>
    </Form>
    {imagePreview ? <h4 style={{marginTop: '50px'}}>Image Preview:</h4> : null}

      {imagePreview ? <Img className="li-button" src={imagePreview} style={{maxWidth: '200px', padding: '20px'}} alt={props.image}/> : null}
    </>
  )
}
    export default CustomMedForm