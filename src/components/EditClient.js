import React, { Fragment } from 'react'
import { Query } from 'react-apollo'

import { CLIENT_QUERY } from '../querrys'
import FormEdit from '../components/FormEditClient'

const EditClient = props => {
  const { id } = props.match.params

  return (
    <Fragment>
      <h2 className="text-center">Editar Clientes</h2>

      <div className="row justify-content-center">
        <Query query={CLIENT_QUERY} variables={{ id }}>
          {({ loading, error, data, refetch }) => {
            if (loading) return 'Cargando...'
            if (error) return `Error!  ${error.message}`
            return (
              <FormEdit
                props={props}
                cliente={data.getCliente}
                refetch={refetch}
              />
            )
          }}
        </Query>
      </div>
    </Fragment>
  )
}

export default EditClient
