import React, {useState, Fragment} from 'react';

const Lista = () => {

  const [arrayNumero, setNumero] = useState([1,2,3,4,5,6])

  const [numero, setarrayNumero] = useState(7)

  const agregarElemento = () => {

    setarrayNumero(numero + 1)
    //console.log('click')
    setNumero([
      ...arrayNumero,
      numero
    ])
  }

    return(

      <Fragment>
        <h2>lista</h2>

        <button onClick={agregarElemento}>Agregar</button>
         
        <ul>
                {
                    arrayNumero.map((item, index) => 
                        <li key={index}>
                            {item} - {index}
                        </li>
                    )
                }
            </ul>
      </Fragment>
    );

}
export default Lista;