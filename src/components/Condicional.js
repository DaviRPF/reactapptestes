import { useState } from 'react'

function Condicional(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();



    return( 
        <div>
            <h2>Cadastre seu email</h2>
            <input type="email" placeholder="digite seu email..." onChange={(e) => setEmail(e.target.value)}></input> 
            <button onClick={() => setUserEmail(email)} type="submit">Enviar email</button>
            {userEmail &&(

                <div>
                <p>O seu email é: {userEmail}</p>
                <button onClick={() => setUserEmail('')}>Limpar</button>
                </div>


            )}
            



        </div>
        
    )


}

export default Condicional;