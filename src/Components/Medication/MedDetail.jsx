import React from 'react'
import { useParams } from 'react-router-dom'


export default function MedDetail(props) {
  const params = useParams();

  console.log(props.meds)
  
  const med = props.meds.find((m) =>  m.fields.name === params.name)  

  console.log(med)

  return (
    <div>
     
       <h1> {med.fields.name} </h1>
      {/* <h1>{med.fields.description}</h1>  */}
    </div>
  )
}

