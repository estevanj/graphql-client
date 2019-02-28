import React, { Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'

import { CLIENTS_QUERY } from '../querrys'
import { DELETE_CLIENT } from '../mutations'

const Contactos = () => {
  return (
    <Query query={CLIENTS_QUERY} pollInterval={5000}>
      {({ loading, error, data, startPolling, stopPolling }) => {
        if (loading) return 'Cargando.....'
        if (error) return `Error ${error.message}`

        return (
          <Fragment>
            <h2 className="text-center">Listado de Clientes</h2>
            <ul className="list-group mt-4">
              {data.getClientes.map(item => {
                const id = item.id
                return (
                  <li key={item.id} className="list-group-item">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-8 d-flex justify-content-between align-items-center">
                        {item.nombre} {item.apellido}
                      </div>
                      <div className="col-md-4 d-flex justify-content-end">
                        <Mutation mutation={DELETE_CLIENT}>
                          {eliminarCliente => (
                            <button
                              type="button"
                              className="btn btn-danger d-block d-md-inline-block mr-2"
                              onClick={() => {
                                if (window.confirm('Esta seguro?')) {
                                  eliminarCliente({
                                    variables: { id }
                                  })
                                }
                              }}
                            >
                              &times; Eliminar
                            </button>
                          )}
                        </Mutation>
                        <Link
                          to={`/client/edit/${item.id}`}
                          className="btn btn-success d-block d-md-inline-block"
                        >
                          Editar Cliente
                        </Link>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Fragment>
        )
      }}
    </Query>
  )
}

export default Contactos
