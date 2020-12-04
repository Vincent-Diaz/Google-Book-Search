import React, { Component } from "react";
import Form from "../components/Form/form";
import API from "../utils/API";

class Search extends Component {
    state = {
        value: "",
        books: [],
        savedBook: [],
        search: ""
    };

    componentDidMount() {
        this.searchBook();
    }

    searchBook = query => {
        API.getBooks(query)
            .then((res) => {
                const bookList = res.data.items.map((booksData) => {
                    return {
                        id: booksData.id,
                        title: booksData.volumeInfo.title,
                        author: booksData.volumeInfo.authors,
                        description: booksData.volumeInfo.description,
                        image:  ((booksData.volumeInfo.imageLinks) ? booksData.volumeInfo.imageLinks.thumbnail : undefined),
                        link: booksData.volumeInfo.previewLink
                    };
                });
                this.setState({ books: bookList });
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search)
    }

    handleSaveBook = id => {
        console.log("saved")
        const saved = this.state.books.find(books => books.id === id);
        API.saveBook(saved)
        .then(() => {
            const savedBook = [...this.state.savedBook, id];
            console.log(savedBook)
            this.setState({ savedBook });
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <h2>Results</h2>
                    {!this.state.books.length ? (
                        <h1 className="text-center">No Results to Display</h1>
                    ) : (
                            <div>
                                {this.state.books.map(result => (
                                    <div className="card mb-3" key={result.id}>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img alt={result.title} className="img-fluid" src={result.image} />
                                            </div>
                                            <div className="col-md-10">
                                                <div className="card-body">
                                                    <h5 className="card-title">{result.title} by {result.author}</h5>
                                                    <p className="card-text">{result.description}</p>
                                                    <div>
                                                        <a href={result.link} className="btn btn-outline-dark mt-3" target="_blank" rel="noreferrer">View</a>
                                                        <button onClick={() => this.handleSaveBook(result.id)} className="btn btn-outline-primary mt-3 ml-3" >
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        )}
                </div>
            </div>
        )
    }
}
export default Search;