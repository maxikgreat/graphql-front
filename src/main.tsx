import { App } from './App';
import './styles/index.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';

const client = new ApolloClient({
  uri: 'https://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
