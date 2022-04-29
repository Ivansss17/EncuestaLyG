import React, {useEffect, useState} from 'react';
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebase';
import { format } from 'date-fns'
import swal from 'sweetalert2';
import logo from '../img/logo-new.png'



const Form = () => {
	// Estados iniciales//
	const [home, cambiarHome] = useState(true);
	const [input1, cambiarInput1] = useState(5);
	const [input2, cambiarInput2] = useState(5);
	const [input3, cambiarInput3] = useState(5);
	const [inputText, cambiarInputText] = useState('');
    const [datos, setDatos] = useState({
        pregunta1: 5,
        pregunta2: 5,
        pregunta3: 5,
        pregunta4: '',
		fecha: ''
    })
const alerta = ()=>{
 swal.fire({
	title:'Muchas gracias',
	text:'Te valoracion fue enviada con Exito',
	icon:'success',
	button:'Aceptar',
	timer:3500,
})
}
const result = format(new Date(), 'dd.MM.yyyy HH:mm:ss')
console.log(result)

const guardarDatos = async ()=>{
		const envioForm = await addDoc(collection(db, "encuestas"),{
			datos
		});
        console.log(envioForm)
			 
}
		 
		 

	
	const handleSubmit = async (e) => {
		e.preventDefault();
       setDatos ({
            pregunta1: input1,
            pregunta2: input2,
            pregunta3: input3,
            consulta: inputText,
			fecha: result
        })
		guardarDatos();
		alerta()
		cambiarHome(false)
        //console.log(datos)
		
		console.log('Formulario Enviado!');
	}

	const handleInput1 = (e) => {
		cambiarInput1(e.target.value);
        console.log(input1)
	}
	const handleInput3 = (e) => {
		cambiarInput3(e.target.value);
        console.log(input3)
	}
	const handleInputText = (e) => {
		cambiarInputText(e.target.value);
        console.log(inputText)
	}
	
	const handleInput2 = (e) => {
		cambiarInput2(e.target.value);
	}

	return (
		<>
			{home?
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<div className='imagen'><img src={logo} /></div>
					<h2>Encuesta de satisfacción</h2>
                    <h5>Debe responder en una escala de 1 a 10, donde 1 muy insatisfecho y 10 es totalmente satisfecho</h5>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <h2>¿Con respecto al sabor del menu recibido cuan satisfecho esta?</h2>
					<input
						type="range"
						name="1"
						placeholder="1"
						id="1"
                        min="0"
                        max="10"
						value={input1}
						onChange={handleInput1}
					/>
                    <h5>{input1}</h5>
				</div>

				<div>
                <h2>¿Con respecto al estado y temperatura del menu recibido cuan satisfecho esta?</h2>
					<label htmlFor="2"></label>
					<input
						type="range"
						name="2"
						placeholder="2"
						id="2"
                        min="0"
                        max="10"
						value={input2}
						onChange={handleInput2}
					/>
                    <h4>{input2}</h4>
				</div>
				<div>
                <h2>¿Con respecto a la calidad del servicio recibido cuan satisfecho esta?</h2>
					<label htmlFor="3"></label>
					<input
						className='rango'
						type="range"
						name="3"
						placeholder="3"
						id="3"
                        min="0"
                        max="10"
						value={input3}
						onChange={handleInput3}
					/>
                    <h4>{input3}</h4>
				</div>
                <div>
                <label>Escriba su comentario o sugerencia</label>
                < textarea 
                name="consulta"
                cols="30" 
                rows="5"
                id="text"
                value={inputText}
                onChange={handleInputText}></textarea>

                </div>

				<button type="submit">Enviar</button>
			</form>
			:
			<div className='imagen1'><img src={logo} /></div>
}
		</>
		
	);
}
 
export default Form;