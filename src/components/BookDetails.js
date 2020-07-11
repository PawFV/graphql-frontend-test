import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

const BookDetails = (props) => {

  return (
    <div>
      <div id="book-details">
        <p><strong>Book details;</strong></p>
      </div>
    </div>
  );
}

export default graphql(getBookQuery)(BookDetails);