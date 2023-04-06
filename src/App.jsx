import "./App.css";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";


function App() {


  return (
    <div>
      <div className="max-w-xl mx-auto bg-slate-400">
        <h1 className="p-8 h-20 text-center text-white">
          Buscador de imagenes
        </h1>
        <Buscador/>
      </div>
    </div>
  );
}

export default App;
