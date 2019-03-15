import React, { Fragment, useState } from 'react'
import { Mutation } from 'react-apollo'

import { NEW_CLIENT } from '../../mutations'

const NewClient = props => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [emails, setEmails] = useState([{ email: '' }])
  const [tipo, setTipo] = useState('')
  const [error, setError] = useState(false)

  const respuesta = error ? (
    <p className="alert alert-danger p-3 text-center">
      Todos los campos son obligatorios
    </p>
  ) : (
    ''
  )

  const handleInputChange = i => e => {
    const nuevoemail = emails.map((email, index) => {
      if (i !== index) return email
      return {
        ...email,
        email: e.target.value
      }
    })

    setEmails(nuevoemail)
  }
  const nuevoCampo = () => {
    setEmails([...emails, { email: '' }])
  }
  const quitarCampo = i => () => {
    const deleteEnmails = emails.filter((email, index) => i !== index)
    setEmails(deleteEnmails)
  }

  return (
    <Fragment>
      <h2 className="text-center">Nuevo Cliente</h2>
      {respuesta}
      <div className="row justify-content-center">
        <Mutation
          mutation={NEW_CLIENT}
          onCompleted={() => props.history.push('/')}
        >
          {crearCliente => (
            <form
              className="col-md-8 m-3"
              onSubmit={e => {
                e.preventDefault()
                //Validaciones
                if (
                  nombre.length < 1 ||
                  apellido.length < 1 ||
                  empresa.length < 1
                ) {
                  setError(true)
                  return
                }

                const input = {
                  nombre,
                  apellido,
                  empresa,
                  emails,
                  tipo
                }
                crearCliente({
                  variables: { input }
                })
              }}
            >
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
                <div className="form-group col-md-12">
                  <label>Empresa</label>
                  <input
                    value={empresa}
                    onChange={e => setEmpresa(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Empresa"
                  />
                </div>
                {emails.map((item, index) => (
                  <div key={index} className="form-group col-md-12">
                    <label>Correo: {index + 1} :</label>
                    <div className="input-group">
                      <input
                        onChange={handleInputChange(index)}
                        type="email"
                        placeholder="Email"
                        className="form-control"
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={quitarCampo(index)}
                        >
                          &times; Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="form-group d-flex justify-content-center col-md-12">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={nuevoCampo}
                  >
                    + Agregar Email
                  </button>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Edad</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Edad"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Tipo Cliente</label>
                  <select
                    className="form-control"
                    value={tipo}
                    onChange={e => setTipo(e.target.value)}
                  >
                    <option value="">Elegir...</option>
                    <option value="PREMIUM">PREMIUM</option>
                    <option value="BASICO">BÁSICO</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-success float-right">
                Agregar Cliente
              </button>
            </form>
          )}
        </Mutation>
      </div>
    </Fragment>
  )
}

export default NewClient
