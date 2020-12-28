import React, { useState, Fragment} from 'react'

import { useForm } from "react-hook-form"; 

const Ejemplo1 = () => {

    const { register,  errors, handleSubmit} = useForm();

    const [entradas, setentradas] = useState([]);

    const procesarFormulario = (data, e) => {
        console.log(data);
        setentradas([
            ...entradas,
            data
        ])
        // limpiar campos
        e.target.reset();
    }

    return (
        <Fragment>
            <h1>Ejemplo #1</h1>
    
            <form onSubmit={handleSubmit(procesarFormulario)}>
            <input
            name="descripcion"
            placeholder="Introduce la descripcion"
            className="form-control my-2"
            ref={
                register({
                    required: {value: true, message: 'Descripcion obligatorio'}
                })
            }
            />

                <span className="text-danger text-small d-block mb-2">
                    {errors?.descripcion?.message}
                </span>


            <input
            name="contenido"
            placeholder="introduce el contenido"
            className="form-control my-2"
            ref={
                register({
                    required: {value: true, message: 'Contenido obligatorio'}
                })
            }
            />

                <span className="text-danger text-small d-block mb-2">
                    {errors?.contenido?.message}
                </span>
            <button className="btn btn-dark">Enviar</button>
            </form>

            <ul className="mt-2">
                {
                    entradas.map((item, index) =>
                        <li key={index}>
                            {item.descripcion} - {item.contenido}
                        </li>
                    )
                }
            </ul>
        </Fragment>
        
    )
}
export default Ejemplo1;


