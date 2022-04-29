/* import React, { useEffect, useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebase';
import Form from './Form';





function Guardarfirestore({props, estado}) {
    
   
    
    useEffect(() => {

        
       const GuardarDatos = async ()=>{
            const datos = await addDoc(collection(db, "encuestas"),{
               props
              });
            console.log(datos)
            
        }
        
            
        GuardarDatos();
   
    }, []) 



  return (
      <>
    <div>Guardarfirestore</div>
    
    </>
  )
}

export default Guardarfirestore */