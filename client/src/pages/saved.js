import React, { Component } from "react";
import API from "../utils/API";


class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadbooks())
            .catch(err => console.log(err));
    }

    loadBooks = () => {
        API.savedBooks()
            .then(res => this.setState({ savedBooks: res })) 
            .catch(err => console.log(err));
            console.log("savedBooks")
    }

    render() {
        return (
            // <div className="container">
            //     {!this.state.savedbooks.length ? (
            //         <h1 className="text-center">No Results to Display</h1>
            //     ) : (
                        <div>
                            {this.state.savedBooks.map(result => (
                                <div className="card mb-3" key={result._id}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img alt={result.title} className="img-fluid" src={result.image} />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h5 className="card-title">{result.title} by {result.author}</h5>
                                                <p className="card-text">{result.description}</p>
                                                <div>
                                                    <a href={result.link} className="btn btn-outline-dark mt-3" target="_blank" rel="noreferrer" >View</a>
                                                    <button onClick={() => this.deleteBook(result._id)} className="btn btn-outline-primary mt-3 ml-3" >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    // )}
            // </div>
        )
    }
}
export default Saved;