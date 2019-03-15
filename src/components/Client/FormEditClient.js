import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import { UPDATE_CLIENT } from '../../mutations'

const FormEdit = ({ props, cliente, refetch }) => {
  const [nombre, setNombre] = useState(cliente.nombre)
  const [apellido, setApellido] = useState(cliente.apellido)
  const [empresa, setEmpresa] = useState(cliente.empresa)
  const [emails, setEmails] = useState(cliente.emails)
  const [tipo, setTipo] = useState(cliente.tipo)
  const [id] = useState(cliente.id)

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
    <Mutation
      mutation={UPDATE_CLIENT}
      onCompleted={() => refetch().then(() => props.history.push('/'))}
    >
      {actualizarCliente => (
        <form
          className="col-md-8 m-3"
          onSubmit={e => {
            e.preventDefault()

            const input = {
              id,
              nombre,
              apellido,
              empresa,
              emails,
              tipo
            }
            console.log(input)
            actualizarCliente({
              variables: { input }
            })
          }}
        >
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Nombre</label>
              <input
                defaultValue={nombre}
                onChange={e => setNombre(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Apellido</label>
              <input
                defaultValue={apellido}
                onChange={e => setApellido(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label>Empresa</label>
              <input
                defaultValue={empresa}
                onChange={e => setEmpresa(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            {emails.map((input, index) => (
              <div key={index} className="form-group col-md-12">
                <label>Email {index + 1} : </label>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder={`Email`}
                    className="form-control"
                    onChange={handleInputChange(index)}
                    defaultValue={input.email}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-danger"
                      type="button"
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
                onClick={nuevoCampo}
                type="button"
                className="btn btn-warning"
              >
                + Agregar Email
              </button>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Edad</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>Tipo Cliente</label>
              <select
                className="form-control"
                defaultValue={tipo}
                onChange={e => setTipo(e.target.value)}
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
      )}
    </Mutation>
  )
}

export default withRouter(FormEdit)
