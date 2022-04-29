import React, { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firebase';



function Resultados() {

    useEffect(() => {
        const obtenerDatos = async ()=>{
            const datos = await getDocs(collection(db, "encuestas"));
            //console.log(datos)
            //datos.forEach(datos =>{
            //  console.log(datos.data())
            //})

        }
       obtenerDatos();
      
    }, [])
    

   

  return (
    <div>resultados</div>
  )
}

export default Resultados