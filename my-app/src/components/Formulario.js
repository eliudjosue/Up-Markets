import React, { useState, Fragment} from 'react';

const Formulario = () => {

    const [datos, setdatos] = useState({
        Nombre: '',
        Apellido: ''
    })

    const handleInputChange = (event) => {
       // console.log(event.target.value)
        setdatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviardatos = (event) => {
        event.preventDefault();
        console.log(datos.Nombre + ' ' + datos.Apellido)
    }
    
    return(
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onClick={enviardatos}>
                <div className="col-md-3">
                  <input
                  placeholder="Ingrese Nombre"
                  className="form-control"
                  type="text"
                  name="Nombre"
                  onChange={handleInputChange}
                  />
                </div>

                <div className="col-md-3">
                   <input
                   placeholder="Ingrese Apellido"
                   className="form-control"
                   type="text"
                   name="Apellido"
                   onChange={handleInputChange}
                   />
                </div>

                <div className="col-md-3">
                  <button className="btn btn-dark"
                  type="submit">Enviar</button>
                </div>

            </form>
            <h1>{datos.Nombre} - {datos.Apellido}</h1>
        </Fragment>
    )
}

export default Formulario;
