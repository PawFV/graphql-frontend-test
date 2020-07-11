import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

const BookDetails = (props) => {

  function displayBookDetails() {
    const { book } = props.data;
    if (book) {
      return (
        <div id="book-details">
          <h2>Book:  {book.name}</h2>
          <p><b>Genre:</b> {book.genre}</p>
          <p><b>Author:</b> {book.author.name}</p>
          <p><b>All books by this author:</b> </p>
          <ul className="other-books">
            {
              book.author.books.map(item => {
                return <li key={item.id}>{item.name}</li>
              })
            }
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <p>
            No book selected
          </p>
        </div>
      )
    }
  }

  return (
    <div id="book-details">
      {displayBookDetails()}
    </div>
  );
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);