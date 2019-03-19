import gql from 'graphql-tag'

export const NEW_CLIENT = gql`
  mutation crearCliente($input: ClienteInput) {
    crearCliente(input: $input) {
      id
      nombre
      apellido
    }
  }
`
export const UPDATE_CLIENT = gql`
  mutation actualizarCliente($input: ClienteInput) {
    actualizarCliente(input: $input) {
      id
      nombre
      apellido
      empresa
      tipo
      emails {
        email
      }
    }
  }
`
export const DELETE_CLIENT = gql`
  mutation eliminarCliente($id: ID!) {
    eliminarCliente(id: $id)
  }
`

export const NEW_PRODUCT = gql`
  mutation newProduct($input: ProductoInput) {
    newProduct(input: $input) {
      nombre
    }
  }
`

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`
