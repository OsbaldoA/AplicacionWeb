import { useState, useEffect, Component } from "react";
import "./App.css";
import Buscador from "./componentes/Buscador";

function App() {
  

  const [termino, setTermino] = useState("zdfhg");

  useEffect(()=>{
    setTermino("Hola");
  },[]);

  return (
    <div>
      <div className="max-w-xl mx-auto bg-slate-400">
        <h1 className="p-8 h-20 text-center text-white">
          Buscador de imagenes
        </h1>
        <Buscador
        mensaje={termino}/>
      </div>
    </div>
  );
}

export default App;
