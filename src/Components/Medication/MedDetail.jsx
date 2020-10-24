import React from 'react'
import { useParams } from 'react-router-dom'
import '../../App.css'


export default function MedDetail(props) {
  const params = useParams();


  const med = props.meds.find((m) =>  m.fields === params.name)  

  console.log(med)

  return (
    <div>
       {/* <h1> {med.name} </h1> */}
      {/* <h1>{med.fields.description}</h1>  */}
    </div>
  )
}

