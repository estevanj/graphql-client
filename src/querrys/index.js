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
