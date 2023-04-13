function Imagen({ imagenesLink }) {
  const { previewURL, tags, likes, views, largeImageURL } = imagenesLink;

  return (
    <div className="w-48 h-64 bg-white">
      <img src={previewURL} alt={tags} className="h-48 w-full object-cover" />
      <div className="mt-1 flex">
        <svg
          className="mt-1 ml-3 h-4 w-4 fill-current text-cyan-800"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <span className="ml-2">{likes}</span>

        <svg
          className="ml-6 h-6 w-5 text-cyan-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <span className="ml-1">{views}</span>
      </div>

      <div className="mt-1 flex justify-center">
        <a
          href={largeImageURL}
          target="_blank"
          className="bg-cyan-950 px-2 text-sm text-white border-2 border-white hover:border-cyan-950 hover:bg-white hover:text-cyan-950"
        >
          Ver Imagen
        </a>
      </div>
    </div>
  );
}

export default Imagen;
