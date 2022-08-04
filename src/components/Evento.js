import { render } from "@testing-library/react";

import Button from "./evento/Button";


function Evento(){

    function meuEvento(){
        console.log('Ativando primeiroevento');
    }

    <button text='primeiro evento'/>

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento}  text='primeiro evento' />



        </div>



    )




}

export default Evento;