import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { apolloClient } from './lib/apollo'
import Routers from './Router'
import './styles/global.css'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
