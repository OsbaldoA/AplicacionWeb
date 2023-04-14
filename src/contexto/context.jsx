import { createContext, useState, useEffect } from "react";

export const ContextoBuscador = createContext();

export function FuncionContexto(props) {

    const [imagenes, setImagenes] = useState([]);
    const[numeroPagina, setNumeroPagina] = useState(1);
    const [entradaDatos, setEntradaDatos] = useState(null);

    // useEffect(() => {
    //   consultarAPI(); ///Ayuda a que haga cambios en cuanto cambien los valores
    // }, [numeroPagina, setNumeroPagina]);

    function consultarAPI() {
      
        
      const cantidadDatosMostrados = 30;
      const url =
        "https://pixabay.com/api/?key=35046049-de157df3fd0d21856ae898c3a&q=" +
        entradaDatos +
        "&per_page=" +
        cantidadDatosMostrados + "&page=" + numeroPagina;
      //console.log(url);
      fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => setImagenes(resultado.hits));
      console.log(numeroPagina)
      
    }

    
    


    return ( 
        <ContextoBuscador.Provider value={{imagenes, numeroPagina, setNumeroPagina, setEntradaDatos, consultarAPI}}>
        {props.children}
      </ContextoBuscador.Provider>
     );
}

export default FuncionContexto;