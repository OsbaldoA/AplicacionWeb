import React, { useContext, useState } from "react";
// import Resultado from "./Resultado";

import {ContextoBuscador} from '../contexto/context'
import Paginacion from "./Paginacion";



export function Buscador() {

  // const {setImagenes} = useContext(ContextoBuscador);
  // const {numeroPagina} = useContext(ContextoBuscador);
  const {setEntradaDatos} = useContext(ContextoBuscador);
  const {consultarAPI} = useContext(ContextoBuscador);


  // const [entradaDatos, setEntradaDatos] = useState("");
  // const [imagenes, setImagenes] = useState([]);

  // console.log(entradaDatos);
  // console.log(imagenes);


  function buscadorDatos(e) {
    e.preventDefault();
    //setEntradaDatos(e.target.value);

    consultarAPI();

    //console.log(imagenes);
  }


  // function consultarAPI() {
  //   const cantidadDatosMostrados = 35;
  //   const url =
  //     "https://pixabay.com/api/?key=35046049-de157df3fd0d21856ae898c3a&q=" +
  //     entradaDatos +
  //     "&per_page=" +
  //     cantidadDatosMostrados + "&page=" + numeroPagina;
  //   //console.log(url);

  //   fetch(url)
  //     .then((respuesta) => respuesta.json())
  //     .then((resultado) => setImagenes(resultado.hits));
  // }

  function AccederMetodo (){
    console.log("dentro del metodo");
  }

  
  return (
    <form onSubmit={buscadorDatos}>
      <div className="px-10 pb-10 grid grid-row grid-cols-8 gap-4">
        <div className="grid col-start-2 col-end-6">
          <input
            onChange={(e) => setEntradaDatos(e.target.value)}
            type="text"
            //value={imagenes}
            className="w-full h-10 px-4 outline-none"
            placeholder="Escribe aquí"
          />
        </div>
        <div className="grid col-start-6 col-end-8">
          <button
            className="h-10 bg-red-500 hover:bg-red-400 text-white"
            type="submit"
          >
            Buscar
          </button>
        </div>
        {/* <ConsultaAPI linkAPI={consultarAPI} /> */}
      </div>
      
      {/* <ContextoAPI link={AccederMetodo}/> */}
      {/* pasalos datos de entradaDatos a resultado por medio de lectura */}
      {/* <ContextoBuscador.Provider value={{imagenes}}>
        {props.children}
      </ContextoBuscador.Provider> */}
      {/* <Resultado imagenes={imagenes} /> */}
    </form>
  
  );
}

export default Buscador;
