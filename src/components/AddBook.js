import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';


const AddBook = (props) => {
  const [state, setState] = useState({
    name: "",
    genre: "",
    authorId: ""
  });

  function displayAuthors() {
    const data = props.getAuthorsQuery;
    if (data.loading) return (<option disabled>Loading Authors...</option>);
    else {
      return data.authors.map(author => {
        return (<option key={author.id} value={author.id}>{author.name}</option>);
      })
    }
  }
  function submitBook(e) {
    e.preventDefault();
    props.addBookMutation({
      variables: {
        name: state.name,
        genre: state.genre,
        authorId: state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  return (
    <form id="add-book" onSubmit={submitBook}>
      <div className="field">
        <label>Book name:</label> <br />
        <input type="text" onChange={e => setState({ ...state, name: e.target.value })} />
      </div>

      <div className="field">
        <label>Genre:</label><br />
        <input type="text" onChange={e => setState({ ...state, genre: e.target.value })} />
      </div>

      <div className="field">
        <label>Author:</label> <br />
        <select onChange={e => setState({ ...state, authorId: e.target.value })}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>ADD</button>

    </form>
  );
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
