import React, { Component } from 'react';
// import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/Queries';
import BookDetails from './BookDetails';

class BookList extends Component {
constructor(props) {
    super(props)
    this.state = {
        selected: null
    }
}

    displayBooks() {
        let data = this.props.data;
        if(data.loading) {
            return <div>loading Books...</div>
        } else {
            return data.books.map(book => {
                return(
                    <li key={book.id} onClick={(e) => {this.setState({selected: book.id})}}>{book.name}</li>
                )
            })
        }
    }
  render() {
      //console.log(this.props);
    return (
      <div>
        <ul id="book-list">
        {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
