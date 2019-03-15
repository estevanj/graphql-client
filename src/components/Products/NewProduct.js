import React, { Fragment, useState } from 'react'
import { Mutation } from 'react-apollo'
import { NEW_CLIENT } from '../../mutations'
const NewClient = props => {
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState(0)
  const [stock, setStock] = useState(0)

  const validarForm = () => {
    if (nombre !== '' && precio > 0 && stock > 0) {
      return false
    } else {
      return true
    }
  }
  return (
    <Fragment>
      <h2 className="text-center">Nuevo Producto</h2>
      <div className="row justify-content-center">
        <Mutation
          mutation={NEW_CLIENT}
          onCompleted={() => props.history.push('/')}
        >
          {crearCliente => (
            <form className="col-md-8">
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  className="form-control"
                  placeholder="Nombre del Producto"
                />
              </div>
              <div className="form-group">
                <label>Precio:</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                  </div>
                  <input
                    type="number"
                    name="precio"
                    value={precio}
                    onChange={e => setPrecio(e.target.value)}
                    className="form-control"
                    placeholder="Precio del Producto"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Stock:</label>
                <input
                  type="number"
                  name="stock"
                  value={stock}
                  onChange={e => setStock(e.target.value)}
                  className="form-control"
                  placeholder="stock del Producto"
                />
              </div>
              <button
                disabled={validarForm()}
                type="submit"
                className="btn btn-success float-right"
              >
                Crear Producto
              </button>
            </form>
          )}
        </Mutation>
      </div>
    </Fragment>
  )
}

export default NewClient
