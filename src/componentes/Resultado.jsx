import { useContext } from "react";
import Imagen from "./Imagen";
import { ContextoBuscador } from "../contexto/context";
import Paginacion from "./Paginacion";

function Resultado() {
  const { imagenes } = useContext(ContextoBuscador);

  if (imagenes.length === 0) return null;
  console.log(imagenes);

  return (
    <div>
      <div className="grid grid-cols-5 gap-5 p-10 justify-items-center">
        {imagenes.map((imagen) => (
          <Imagen key={imagen.id} imagenesLink={imagen} />
        ))}
      </div>
      <Paginacion />
    </div>
  );
}

export default Resultado;
