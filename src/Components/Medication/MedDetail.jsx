import React from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'


export default function MedDetail(props) {
  const params = useParams();


  const med = props.meds.find((m) =>  m.fields === params.name)  

  console.log(med)

  return (
    <div>
      <CircularProgress />
      UNDER CONSTRUCTION
       {/* <h1> {med.name} </h1> */}
      {/* <h1>{med.fields.description}</h1>  */}
    </div>
  )
}

