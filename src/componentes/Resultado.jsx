import React, { useState, createContext } from "react";

export const context = createContext();

function Resultado({ imagenes }) {

  function mostrarImagenes() {
    if (imagenes.length === 0) return null;
    console.log(imagenes);
  }

  return <>
  {mostrarImagenes()}
  </>;
}

export default Resultado;
