import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeds } from "../services/axiosRequests";
import MedDetailHeader from '../Components/shared/Header/MedDetailHeader'
import { CircularProgress } from '@material-ui/core'
// import { getMedDetail} from '../services/axiosRequests'

export default function MedDetail() {
  const params = useParams();

  const [med, setMed] = useState([]);

  useEffect( () => {
    const getApi = async () => {
      const response = await getMeds()
      const med = response.find((m) =>  m.fields.name === params.name)
      setMed(med);
  };
  getApi();
  }, [params]);

  if (!med?.fields?.image) {
    return <><MedDetailHeader /> <CircularProgress style={{ marginLeft: '50%', marginTop: '10%', width: '50px'}}/></>
  }

  return (
 <>
    <MedDetailHeader />
    <div className='about-text' style={{textShadow: '2px 2px peachpuff'}}>
     <h1>{med?.fields?.name} </h1>
        {med?.fields?.class  !== undefined ? <h2>Class: {med?.fields?.class}</h2> : null}
        <h2>Description:</h2>
        <h4 style={{marginLeft: '100px', marginRight: '100px'}}> {med?.fields?.description}</h4>  
      <img src={med?.fields?.image} style={{maxWidth: '350px',  maxHeight: '350px'}} alt="medication" />
      </div>
      </>
  );
}
