import Imagen from "./Imagen";

function Resultado({ imagenes }) {

  function mostrarImagenes() {
    if (imagenes.length === 0) return null;
    console.log(imagenes);

  }

  return(
    <div className="">
        {mostrarImagenes()}
        {imagenes.map(imagen => <Imagen key={imagen.id} imagenesLink={imagen}/>)}

    </div>
  )
}

export default Resultado;
