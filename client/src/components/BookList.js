import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = props => {
  const displayBooks = () => {
    if (props.data.loading) {
      return <div>Loading books...</div>;
    } else {
      const books = props.data.books;
      return books.map(book => (
        <div key={book.id} className='book'>
          <h3 className='book-name'>{book.name}</h3>
          <p className='book-author'>{book.id}</p>
          <p className='book-genre'>{book.genre}</p>
        </div>
      ));
    }
  };

  return <div id='book-list'>{displayBooks()}</div>;
};

export default graphql(getBooksQuery)(BookList);
