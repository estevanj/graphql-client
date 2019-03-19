import gql from 'graphql-tag'

export const CLIENTS_QUERY = gql`
  query getClientes($limit: Int, $offset: Int) {
    getClientes(limit: $limit, offset: $offset) {
      id
      nombre
      apellido
      empresa
    }
    totalClientes
  }
`

export const CLIENT_QUERY = gql`
  query ConsultarCliente($id: ID) {
    getCliente(id: $id) {
      id
      nombre
      apellido
      empresa
      emails {
        email
      }
      tipo
    }
  }
`
export const PRODUCTS_QUERY = gql`
  query {
    getProducts {
      id
      nombre
      precio
      stock
    }
  }
`
