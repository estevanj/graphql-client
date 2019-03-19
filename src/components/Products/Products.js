import React, { Fragment, useState } from 'react'
import { Query, Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'

import { PRODUCTS_QUERY } from '../../querrys'
import { DELETE_PRODUCT } from '../../mutations'
import Success from '../Alerts/Success'

const Products = () => {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('')

  const alert = show ? <Success mensaje={message} /> : ''
  return (
    <Query query={PRODUCTS_QUERY} pollInterval={5000}>
      {({ loading, error, data, startPolling, stopPolling }) => {
        if (loading) return 'Cargando.....'
        if (error) return `Error ${error.message}`

        return (
          <Fragment>
            <h2 className="text-center">Listado de Productos</h2>
            <table className="table">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Eliminar</th>
                  <th scope="col">Editar</th>
                </tr>
              </thead>
              <tbody>
                {data.getProducts.map(item => {
                  const { id } = item
                  return (
                    <tr key={id}>
                      <td>{item.nombre}</td>
                      <td>{item.precio}</td>
                      <td>{item.stock}</td>
                      <td>
                        <Mutation mutation={DELETE_PRODUCT}
                        onCompleted={(data) => {
                          
                        }}>
                          {deleteProduct => (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => {
                                if (window.confirm('Esta seguro?')) {
                                  deleteProduct({
                                    variables: { id }
                                  })
                                }
                              }}
                            >
                              &times; Eliminar
                            </button>
                          )}
                        </Mutation>
                      </td>
                      <td>
                        <Link
                          to={`/products/edit/${id}`}
                          className="btn btn-success"
                        >
                          Editar
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Fragment>
        )
      }}
    </Query>
  )
}

export default Products
