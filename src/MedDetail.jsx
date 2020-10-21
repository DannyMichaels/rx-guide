import React from 'react'
import { useParams } from 'react-router-dom'
import './App.css'


export default function MedDetail(props) {
  const params = useParams();
  const med = props.fetchMeds.find((m) =>  m.fields.name === params.name)  

  return (
    <div >
     <h1> {med.name} </h1>
    </div>
  )
}
