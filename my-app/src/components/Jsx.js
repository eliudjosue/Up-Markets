import React, {useState, Fragment} from 'react';

const Jsx = () => {

    const temperatura = 21;

    return (
        <Fragment>
            <h3>Frio o calor?</h3>
       <h4>
           {
               temperatura > 20 ? 'Calor' : 'Frio'
           }
       </h4>
        </Fragment>
       
    );
}

export default Jsx;
