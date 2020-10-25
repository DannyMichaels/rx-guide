import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeds } from "../../services/axiosCalls";
import MedDetailHeader from '../../Components/shared/Header/MedDetailHeader'

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


  return (
 <>
    <MedDetailHeader />
    <div className='about-text' style={{textShadow: '2px 2px peachpuff'}}>
      <h1>{med?.fields?.name} </h1>
      <h2>Description:</h2>
        <h4 style={{marginLeft: '100px', marginRight: '100px'}}> {med?.fields?.description}</h4>  
      <img src={med?.fields?.image} alt="medication" />
      </div>
      </>
  );
}
