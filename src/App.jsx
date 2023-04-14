import "./App.css";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";

function App() {
  return (
    <div className="Inicio">
      <div className="max-w-3xl  mx-auto bg-cyan-800">
        <h1 className="p-8 h-20 text-center text-white">
          Buscador de imagenes
        </h1>
        <Buscador />
      </div>
      <div>
        <Resultado />

      </div>
    </div>
  );
}

export default App;
