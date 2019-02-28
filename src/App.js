import React, { Fragment } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Clientes from './components/Clients'
import NewClient from './components/NewClient'
import EditClient from './components/EditClient'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Clientes} />
              <Route exact path="/client/new" component={NewClient} />
              <Route exact path="/client/edit/:id" component={EditClient} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  )
}

export default App
