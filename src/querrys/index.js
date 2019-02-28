import gql from 'graphql-tag'

export const CLIENTS_QUERY = gql`
  {
    getClientes {
      id
      nombre
      apellido
      empresa
    }
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
