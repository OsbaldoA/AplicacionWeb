import React, { useState } from "react";

function Buscador() {
  const [entradaDatos, setEntradaDatos] = useState("");
  const [imagenes, setImagenes] = useState("");

  function buscadorDatos(e) {
    e.preventDefault();

    consultarAPI();
  }

  function consultarAPI() {
    const cantidadDatosMostrados = 30;
    const url =
      "https://pixabay.com/api/?key=35046049-de157df3fd0d21856ae898c3a&q=" +
      entradaDatos +
      "&per_page=" +
      cantidadDatosMostrados;
    //console.log(url);

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => setImagenes(resultado.hits));
      console.log(imagenes);
    
  }

  return (
    <form onSubmit={buscadorDatos}>
      <div className="px-10 pb-10 grid grid-row grid-cols-4 gap-4">
        <div className="col-span-3">
          <input
            onChange={(e) => setEntradaDatos(e.target.value)}
            type="text"
            className="w-full h-10 px-4 outline-none"
            placeholder="Escribe aquí"
          />
        </div>
        <div>
          <button
            //onChange={e => setEntradaDatos(e.target.value)}
            className="w-full h-10 bg-red-500 hover:bg-red-400 text-white"
            type="submit"
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
}

export default Buscador;
