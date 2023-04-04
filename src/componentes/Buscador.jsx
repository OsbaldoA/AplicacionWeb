import React, { Component } from "react";

class Buscador extends Component {
  

  //se establecieron cambios
  state = {};
  render() {
    return (
      <form>
        <div className="px-10 pb-10 grid grid-row grid-cols-4 gap-4">
          <div className="col-span-3">
            <input
              type="text"
              className="w-full h-10 px-4 outline-none"
              placeholder="Escribe aquí"
            />
          </div>
          <div>
            <button className="w-full h-10 bg-red-500 hover:bg-red-400 text-white" type="submit">
              Buscar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
