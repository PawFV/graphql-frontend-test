import React from 'react';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Paw rendering list</h1>
        <BookList />
        <AuthorList />
      </div>
    </ApolloProvider>
  );
}

export default App;
