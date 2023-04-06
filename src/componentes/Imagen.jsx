function Imagen ({imagenesLink}) {

    const {previewURL, tags} = imagenesLink;

    return ( 
        <div>
            <div className="card">
                <img src={previewURL} alt={tags} />
            </div>
        </div>
     );
}

export default Imagen ;