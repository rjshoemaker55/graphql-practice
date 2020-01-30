import React from 'react';
import { graphql } from 'react-apollo';

import { getAuthorsQuery } from '../queries/queries';

const AddBook = props => {
  let data = props.data;

  const authorDisplay = () => {
    if (data.loading) {
      return <option>Loading...</option>;
    } else {
      return data.authors.map(author => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  };
  return (
    <form id='add-book'>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input type='text' />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select>{authorDisplay()}</select>
      </div>
      <button>+</button>
    </form>
  );
};

export default graphql(getAuthorsQuery)(AddBook);
