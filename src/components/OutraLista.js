import Item from "./Item";

function OutraLista(props){

    return(
        <>
            <h3>Lista de coisas boas</h3>
            {
                props.itens.map((item) => (
                    <p>{item}</p>

                )
                )
                }
                 
        
              
        </>




    )


    
}

export default OutraLista;