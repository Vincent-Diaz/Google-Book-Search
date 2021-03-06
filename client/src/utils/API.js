import axios from "axios";
const API_KEY = "AIzaSyCn12aJXrp9AT0fIjfUnfOiOQMBtKATaO4";

export default {
  // Gets all books
  getBooks: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`);
  },
  // Gets the book with the given id
  savedBooks: function() {
    return axios.get("/api/books/").then(res => res.data);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id).then(res => res.data);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books/", bookData).then(res => res.data);
  }
};