import React, { useState } from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = props => {
  const [selected, setSelected] = useState(null);
  const displayBooks = () => {
    if (props.data.loading) {
      return <div>Loading books...</div>;
    } else {
      const books = props.data.books;

      return books.map(book => (
        <div key={book.id} className='book' onClick={e => setSelected(book.id)}>
          <h3 className='book-name'>{book.name}</h3>
        </div>
      ));
    }
  };

  return (
    <>
      <div id='book-list'>{displayBooks()}</div>
      <BookDetails bookId={selected} />
    </>
  );
};

export default graphql(getBooksQuery)(BookList);
