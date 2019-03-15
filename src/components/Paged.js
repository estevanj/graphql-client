import React from 'react'

const Paged = ({ actual, total, Limite, paginaAnterior, paginaSiguiente }) => {
  const btnAnterior =
    actual > 1 ? (
      <button
        type="button"
        onClick={paginaAnterior}
        className="btn btn-success mr-2"
      >
        &laquo; Anterior
      </button>
    ) : (
      ''
    )

  const paginas = Math.ceil(total / Limite)
  const btnSiguiente =
    actual !== paginas ? (
      <button
        type="button"
        onClick={paginaSiguiente}
        className="btn btn-success"
      >
        Siguiente &raquo;
      </button>
    ) : (
      ''
    )

  return (
    <div className="mt-5 d-flex justify-content-center">
      {btnAnterior}
      {btnSiguiente}
    </div>
  )
}

export default Paged
