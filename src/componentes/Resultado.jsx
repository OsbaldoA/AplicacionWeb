import { useContext } from "react";
import Imagen from "./Imagen";
import { ContextoBuscador } from "../contexto/context";
import Paginacion from "./Paginacion";

function Resultado() {
  const { imagenes } = useContext(ContextoBuscador);
  const { consultarAPI } = useContext(ContextoBuscador);
  const { numeroPagina } = useContext(ContextoBuscador);

  if (imagenes.length === 0) {
    console.log("No hay imagenes");
    
    return null;
  }  
  
  function Valoración()
  {
    consultarAPI();
  }

  return (
    <div>
      <div className="grid grid-cols-5 gap-5 p-10 justify-items-center">
        {imagenes.map((imagen) => (
          <Imagen key={imagen.id} imagenesLink={imagen} />
        ))}
      </div>
      <div>
        <Paginacion link2={Valoración}/>
      </div>
    </div>
  );
}

export default Resultado;
