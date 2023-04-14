import { Component, useContext, useEffect } from "react";
import {ContextoBuscador} from '../contexto/context'



function Paginacion({link2}) {
  const { numeroPagina} = useContext(ContextoBuscador);
  const {setNumeroPagina} = useContext(ContextoBuscador);
  const {consultarAPI} = useContext(ContextoBuscador);
  
  function Anterior(e) {
    e.preventDefault();
    if(numeroPagina === 1) return null
    setNumeroPagina(numeroPagina - 1);
    consultarAPI();
    Scroll();
  }

  useEffect(() => {

      consultarAPI();
    
     ///Ayuda a que haga cambios en cuanto cambien los valores
  }, [numeroPagina]);

  const Siguiente = (e) => {
    e.preventDefault();
    setNumeroPagina(numeroPagina + 1);
      consultarAPI();
      Scroll();
    
  }



  function Scroll ()
  {
    const elemento = document.querySelector('.Inicio');
    elemento.scrollIntoView('smooth', 'end');
  }

  
  
  

  //como ejecutar lafuncion consultarAPI desde aquí

  return (
    <form>
      <div className="grid grid-rows-1 grid-cols-2 gap-2  m-10 " >
      <div className="grid justify-items-end">
        <button
onClick={Anterior}
          type="button"
          className="mr-10 bg-cyan-800 text-white p-2 hover:bg-white hover:text-cyan-900"
        >
          Anterior{" "}
        </button>
      </div>
      <div className="grid justify-items-start">
        <button
          
          onClick={Siguiente}
          type="submit"
          className="bg-cyan-800 text-white p-2 hover:bg-white hover:text-cyan-900"
        >
          Siguiente{" "}
        </button>

      </div>
      
    </div>
    </form>
    
  );
}

export default Paginacion;
