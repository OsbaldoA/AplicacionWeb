import { createContext, useState } from "react";

export const ContextoBuscador = createContext();

export function FuncionContexto(props) {

    const [imagenes, setImagenes] = useState([]);


    return ( 
        <ContextoBuscador.Provider value={{imagenes, setImagenes}}>
        {props.children}
      </ContextoBuscador.Provider>
     );
}

export default FuncionContexto;