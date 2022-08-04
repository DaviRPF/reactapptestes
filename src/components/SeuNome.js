import { useState } from "react";

function SeuNome(props){
   


     return(

        <div>
            <p>Digite o seu SeuNome</p>
            <input type='text' placeholder='Qual é o seu nome?' onChange={(e) => props.setNome(e.target.value)} />

        </div>



    )


}


export default SeuNome;