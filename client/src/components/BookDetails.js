import React from 'react';
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/queries';

const BookDetails = props => {
  const displayBookDetails = () => {
    const { book } = props.data;

    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <h3>{book.author.name}</h3>
          <p>{book.genre}</p>
          <h3>All books by this author:</h3>
          <div className='other-books'>
            {book.author.books.map(item => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        </div>
      );
    } else {
      return <div>Book details will appear here.</div>;
    }
  };

  return <div id='book-details'>{displayBookDetails()}</div>;
};

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
