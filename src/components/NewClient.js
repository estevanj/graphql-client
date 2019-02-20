import React, { Fragment, useState } from 'react'

const NewClient = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [emails, setEmails] = useState([{ email: '' }])
  const [tipo, setTipo] = useState('')

  return (
    <Fragment>
      <h2 className="text-center">Nuevo Cliente</h2>
      <div className="row justify-content-center">
        <form className="col-md-8 m-3">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Nombre</label>
              <input
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Apellido</label>
              <input
                value={apellido}
                onChange={e => setApellido(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Empresa</label>
              <input
                value={empresa}
                onChange={e => setEmpresa(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Empresa"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                value={emails.email}
                onChange={e => setEmails({ email: e.target.value })}
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Edad</label>
              <input type="text" className="form-control" placeholder="Edad" />
            </div>
            <div className="form-group col-md-6">
              <label>Tipo Cliente</label>
              <select
                className="form-control"
                value={tipo}
                onChange={e => setTipo({ email: e.target.value })}
              >
                <option value="">Elegir...</option>
                <option value="PREMIUM">PREMIUM</option>
                <option value="BASICO">BÁSICO</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-success float-right">
            Guardar Cambios
          </button>
        </form>
      </div>
    </Fragment>
  )
}

export default NewClient
