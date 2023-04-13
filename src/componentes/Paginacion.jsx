function Paginacion() {
  return (
    <div className="grid grid-rows-1 grid-cols-2 gap-2  m-10 ">
      <div className="grid justify-items-end">
        <button 
    
          type="button"
          className="mr-10 bg-cyan-800 text-white p-2 hover:bg-white hover:text-cyan-900"
        >
          Anterior{" "}
        </button>
      </div>
      <div className="grid justify-items-start">
        <button
          type="button"
          className="bg-cyan-800 text-white p-2 hover:bg-white hover:text-cyan-900"
        >
          Siguiente{" "}
        </button>
      </div>
    </div>
  );
}

export default Paginacion;
