import { useState } from "react";
import "./App.css";
import Buscador from "./componentes/Buscador";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="max-w-xl mx-auto bg-slate-400">
        <h1 className="p-8 h-20 text-center text-white">Buscador de imagenes</h1>
          <Buscador/>
      </div>
    </div>
  );
}

export default App;
